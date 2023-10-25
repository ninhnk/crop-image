## Require

- Bootstrap >= 4.0.0
- Jquery >= 3.0.0

## Introduction
The `ImageCropper` is a utility for cropping and manipulating images in a web application. It provides methods for handling image uploads, cropping, and generating base64 encoded image data.

## Installation

```
composer require stew/image-cropper
php artisan vendor:publish --provider="Stew\ImageCropper\Providers\ImageCropperServiceProvider" --force
```

## HTML Structure
- To use the ImageCropper class, make sure you have the following HTML structure in your document:

```angular2html

<link rel="stylesheet" href="/path/image-cropper/image-cropper.css"/>
<script src="/path/image-cropper/cropper/cropper.js"></script>
<script src="/path/image-cropper/image-cropper.js"></script>

<div id="avatar-image"></div> <!-- Use this for avatar cropping -->
<div id="drag-image"></div> <!-- Use this for drag and drop image upload -->

@include('view-crop::include._modal-crop-bs4') <!-- For bootstrap4 -->
@include('view-crop::include._modal-crop-bs5') <!-- For bootstrap5 -->
```

## Usage

- To use the ImageCropper class, initialize it with a configuration object:
```angular2html
const imageCropper = new ImageCropper();
```

#### Default Configuration Options

- `dragTitle` (optional, string): The text to display as the drag-and-drop area title. (default: 'drag & drop to upload').

- `formSelector` (optional, string): The selector for the form to attach hidden input fields. (default: 'form)

- `isThumbnail` (optional, boolean): Specifies whether to generate a thumbnail image. (default: `false`).

- `isOriginalName` (optional, boolean): Specifies whether to include the original image name. (default: `true`).

- `thumbnailSize` (optional, object): Defines the dimensions of the thumbnail image as an object with `width` and `height` properties. (default: { width: 160, height: 160 }).

You can configure the `ImageCropper` by providing these parameters in the initialization object. For example:

```javascript
const config = {
    dragTitle: 'Click or drag to upload an image',
    formSelector: '#upload-form',
    isThumbnail: true,
    isOriginalName: false,
    thumbnailSize: { width: 120, height: 120 },
};
```

- If you wish to add image uploading functionality to your Laravel project, you can utilize the <a href="https://github.com/ninhnk/image-uploader">Image Uploader</a> package. 

```angular2html
composer require stew/image-uploader
```
