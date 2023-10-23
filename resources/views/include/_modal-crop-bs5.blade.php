<div class="modal fade" id="modal-crop" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document" style="max-width: 1000px;">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabel">@lang('lang-crop::labels.modal_crop.title')</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" class="btn-check" name="btnradio" id="ratio16-9" autocomplete="off">
                                    <label class="btn btn-outline-primary aspect-ratio" for="ratio16-9" data-val={{ 16 / 9 }}> 16:9 </label>

                                    <input type="radio" class="btn-check" name="btnradio" id="ratio4-3" autocomplete="off">
                                    <label class="btn btn-outline-primary aspect-ratio" for="ratio4-3" data-val={{ 4 / 3 }}> 4:3 </label>

                                    <input type="radio" class="btn-check" name="btnradio" id="ratio1" autocomplete="off" checked>
                                    <label class="btn btn-outline-primary aspect-ratio" for="ratio1" data-val={{ 1 }}> 1:1 </label>

                                    <input type="radio" class="btn-check" name="btnradio" id="ratio2-3" autocomplete="off">
                                    <label class="btn btn-outline-primary aspect-ratio" for="ratio2-3" data-val={{ 2 / 3 }}> 2:3 </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">@lang('lang-crop::labels.modal_crop.cancel')</button>
                <button type="button" class="btn btn-primary" id="crop">@lang('lang-crop::labels.modal_crop.crop')</button>
            </div>
        </div>
    </div>
</div>
