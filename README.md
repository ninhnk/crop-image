## Require

- Bootstrap >= 4.0.0
- Jquery >= 3.0.0

## Installation

```
composer require stew/crop-image
php artisan vendor:publish --provider="Stew\CropImage\Providers\CropImageServiceProvider" --force
```
Include files:

```angular2html
@include('view-crop::include._modal-crop-bs4') // For bootstrap4
@include('view-crop::include._modal-crop-bs5') // For bootstrap5

<link rel="stylesheet" href="/path/crop-image/cropper/cropper.css"/>
<script src="/path/crop-image/cropper/cropper.js" defer></script>
<link rel="stylesheet" href="/path/crop-image/crop-image.css">
<script src="/path/crop-image/crop-image.js" defer></script>
```

## Usage

```angular2html
<input type="file" class="image-crop d-none" accept="image/*">
<input type="hidden" name="image_base64">
<input type="hidden" name="original_name"> // add this line if you want to save original name
<div class="show-image">
    <img width="160" height="160" src="crop-image/images/avatar-default.webp">
    <div class="icon-camera"></div>
</div>
```

- If you wish to add image uploading functionality to your Laravel project, you can utilize the <a href="https://github.com/ninhnk/image-uploader">Image Uploader</a> package. 

```angular2html
composer require stew/image-uploader
```
