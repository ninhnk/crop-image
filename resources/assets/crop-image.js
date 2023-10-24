class ImageCropper {
    constructor(config) {
        this.$dragTitleElement = $('#drag-title');
        this.$modal = $('#modal-crop');
        this.$image = document.getElementById('image');
        this.$previews = document.getElementsByClassName('img-preview');
        this.cropper = null;
        this.originalName = null;
        this.isThumbnail = config.isThumbnail !== undefined ? config.isThumbnail : false;
        this.isOriginalName = config.isOriginalName !== undefined ? config.isOriginalName : true;
        this.thumbnailSize = config.thumbnailSize || { width: 160, height: 160 };
        this.addBlockAvatar();
        this.addBlockDrag(config.dragTitle);
        this.addInputHidden(config.formSelector);
        this.setupEventListeners();
    }

    setupEventListeners() {
        $("body").on("change", ".image-crop", this.handleImageChange.bind(this));
        this.$modal.on('shown.bs.modal', this.handleModalShown.bind(this));
        this.$modal.on('hidden.bs.modal', this.handleModalHidden.bind(this));
        $('body').on('click', '.icon-camera', this.handleClickCamera.bind(this));
        $('body').on('click', '.aspect-ratio', this.handleAspectRatioClick.bind(this));
        $("#crop").on('click', this.handleCropClick.bind(this));
        $('body').on('click', '.remove-image', this.handleRemoveImageClick.bind(this));
    }

    handleImageChange(e) {
        let files = e.target.files;
        let reader;
        let file;

        if (files && files.length > 0) {
            file = files[0];
            this.originalName = file.name;
            reader = new FileReader();
            reader.onload = (e) => {
                this.$image.src = reader.result;
                this.$image.alt = file.name;
                this.$modal.modal('show');
            };
            reader.readAsDataURL(file);
        }
    }

    handleModalShown() {
        this.cropper = new Cropper(this.$image, {
            aspectRatio: 1,
            viewMode: 1,
            preview: '.img-preview',
            crop: (event) => {
                let data = event.detail;
                let previewAspectRatio = data.width / data.height;
                $.each(this.$previews, function (_i, _item) {
                    let previewWidth = _item.offsetWidth;
                    let previewHeight = previewWidth / previewAspectRatio;
                    _item.style.height = previewHeight + 'px';
                });
            }
        });
        $(".aspect-ratio[data-val='1']").addClass('active');
    }

    handleModalHidden() {
        this.cropper.destroy();
        this.cropper = null;
        $('.image-crop').val('');
        $('.aspect-ratio').removeClass('active');
    }

    handleClickCamera() {
        $('#avatar-image .image-crop').click();
    }

    handleAspectRatioClick(_this) {
        this.cropper.setAspectRatio(_this.target.dataset.val);
    }

    handleCropClick() {
        let canvas = this.cropper.getCroppedCanvas();
        canvas.toBlob((blob) => {
            const reader = new FileReader();
            this.blobToWebP(blob, (webpBlob) => {
                URL.createObjectURL(webpBlob);
                reader.readAsDataURL(webpBlob);
                reader.onloadend = () => {
                    let base64 = reader.result;
                    $("input[name='image_base64']").val(base64);
                    $(".show-image img").attr("src", base64);
                    $(".show-image img").attr("alt", this.originalName);
                    if (this.$dragTitleElement.length) {
                        this.$dragTitleElement.hide();
                        $('#drag-image .show-image').show();
                    }
                    this.$modal.modal('toggle');
                }
            });
        });

        let thumbnailCanvas = this.cropper.getCroppedCanvas(this.thumbnailSize);
        thumbnailCanvas.toBlob((thumbnailBlob) => {
            const thumbnailReader = new FileReader();
            this.blobToWebP(thumbnailBlob, (webpBlob) => {
                URL.createObjectURL(webpBlob);
                thumbnailReader.readAsDataURL(webpBlob);
                thumbnailReader.onloadend = () => {
                    let thumbnailBase64 = thumbnailReader.result;
                    if ($("input[name='thumbnail_img']").length) {
                        $("input[name='thumbnail_img']").val(thumbnailBase64);
                    }
                };
            });
        });
        if ($("input[name='original_name']").length) {
            $("input[name='original_name']").val(this.originalName);
        }
    }

    handleRemoveImageClick() {
        this.$dragTitleElement.show();
        $('#drag-image .show-image').hide();
        $("#drag-image .show-image img").attr("src", '');
        $("#drag-image .show-image img").attr("alt", '');
    }

    addBlockAvatar() {
        $('#avatar-image').html(`
            <input type="file" class="image-crop d-none" accept="image/*">
            <div class="show-image">
                <img width="160" height="160" src="crop-image/images/avatar-default.webp" alt="avatar-default">
                <div class="icon-camera"></div>
            </div>
        `);
    }

    addBlockDrag(dragTitle = 'drag & drop to upload') {
        $('#drag-image').html(`
            <input type="file" class="image-crop" accept="image/*">
            <div id="drag-title">${dragTitle}</div>
            <div class="show-image" style="display: none;">
                <img height="160" src="" alt="">
                <button type="button" class="btn btn-danger btn-sm remove-image">&times;</button>
            </div>
        `);
    }

    addInputHidden(selector = 'form') {
        let thumbnailInput = this.isThumbnail ? '<input type="hidden" name="thumbnail_img">' : '';
        let originalInput = this.isOriginalName ? '<input type="hidden" name="original_name">' : '';
        let html = `
            <input type="hidden" name="image_base64">
            ${originalInput}
            ${thumbnailInput}
        `;
        $(selector).prepend(html);
    }

    blobToWebP(blob, callback) {
        const inputImage = new Image();
        inputImage.src = URL.createObjectURL(blob);
        inputImage.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = inputImage.width;
            canvas.height = inputImage.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(inputImage, 0, 0);
            canvas.toBlob(callback, 'image/webp', 1.0);
        };
    }

    static returnInstance(config) {
        if (!ImageCropper.instance) {
            ImageCropper.instance = new ImageCropper(config);
        }
        return ImageCropper.instance;
    }
}

window.ImageCropper = ImageCropper.returnInstance;
