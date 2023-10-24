<?php

namespace Stew\ImageCropper\Providers;

use Illuminate\Support\ServiceProvider;

class ImageCropperServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'view-crop');
        $this->loadTranslationsFrom(__DIR__ . '/../../resources/lang', 'lang-crop');

        $this->publishes([
            __DIR__ . '/../../resources/assets' => public_path('image-cropper'),
        ]);
    }
}
