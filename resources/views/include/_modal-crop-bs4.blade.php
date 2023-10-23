<div class="modal fade" id="modal-crop" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document" style="max-width: 1000px;">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabel">@lang('lang-crop::labels.modal_crop.title')</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="img-container">
                    <div class="row pb-3">
                        <div class="col-md-8">
                            <div class="w-100">
                                <img id="image" class="w-100" src="" alt="">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="preview-container">
                                <div class="img-preview preview-lg"></div>
                                <div class="img-preview preview-md"></div>
                                <div class="img-preview preview-sm"></div>
                                <div class="img-preview preview-xs"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8"></div>
                        <div class="col-md-4">
                            <div class="text-center">
                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label class="btn btn-outline-primary aspect-ratio" data-val={{ 16 / 9 }}>
                                        <input type="radio" id="ratio16-9" autocomplete="off"> 16:9
                                    </label>
                                    <label class="btn btn-outline-primary aspect-ratio" data-val={{ 4 / 3 }}>
                                        <input type="radio" id="ratio4-3" autocomplete="off"> 4:3
                                    </label>
                                    <label class="btn btn-outline-primary aspect-ratio active" data-val={{ 1 }}>
                                        <input type="radio" id="ratio1" autocomplete="off"> 1:1
                                    </label>
                                    <label class="btn btn-outline-primary aspect-ratio" data-val={{ 2 / 3 }}>
                                        <input type="radio" id="ratio2-3" autocomplete="off"> 2:3
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">@lang('lang-crop::labels.modal_crop.cancel')</button>
                <button type="button" class="btn btn-primary" id="crop">@lang('lang-crop::labels.modal_crop.crop')</button>
            </div>
        </div>
    </div>
</div>
