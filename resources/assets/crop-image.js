$(function () {
    var $modal = $('#modal-crop');
    var image = document.getElementById('image');
    var cropper, fileName;

    $("body").on("change", ".image-crop", function(e){
        let files = e.target.files;
        let reader;
        let file;

        if (files && files.length > 0) {
            file = files[0];
            fileName = file.name;
            // Use FileReader to load the image
            reader = new FileReader();
            reader.onload = function (e) {
                image.src = reader.result;
                image.alt = file.name;
                $modal.modal('show');
            };
            reader.readAsDataURL(file);
        }
    });

    $modal.on('shown.bs.modal', function () {
        // Initialize Cropper when the modal is shown
        cropper = new Cropper(image, {
            aspectRatio: 1,
            viewMode: 1,
            preview: '.preview-crop'
        });
    }).on('hidden.bs.modal', function () {
        // Cleanup when the modal is hidden
        cropper.destroy();
        cropper = null;
        $('.image-crop').val('');
    });

    $('body').on('click', '.icon-camera', function() {
        $('.image-crop').click();
    });

    $('body').on('click', '.aspect-ratio', function() {
        cropper.setAspectRatio($(this).data('val'));
    });

    $("#crop").on('click', function(){
        let canvas = cropper.getCroppedCanvas();
        canvas.toBlob(function(blob) {
            const reader = new FileReader();
            // Convert to WebP format and update the blob
            blobToWebP(blob, function(webpBlob) {
                URL.createObjectURL(webpBlob);
                reader.readAsDataURL(webpBlob);

                reader.onloadend = function() {
                    let base64 = reader.result;
                    $("input[name='image_base64']").val(base64);
                    if ($("input[name='original_name']").length) {
                        $("input[name='original_name']").val(fileName);
                    }
                    $(".show-image img").attr("src", base64);
                    $(".show-image img").attr("alt", fileName);
                    $("#modal-crop").modal('toggle');
                }
            });
        });
    });
    // Function to convert a blob to WebP format
    function blobToWebP(blob, callback) {
        const inputImage = new Image();
        inputImage.src = URL.createObjectURL(blob);
        inputImage.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = inputImage.width;
            canvas.height = inputImage.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(inputImage, 0, 0);
            // Convert to WebP format
            canvas.toBlob(callback, 'image/webp', 1.0);
        };
    }
});
