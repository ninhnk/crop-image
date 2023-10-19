<?php

namespace Stew\CropImage\Providers;

use Illuminate\Support\ServiceProvider;

class CropImageServiceProvider extends ServiceProvider
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
            __DIR__ . '/../../resources/assets' => public_path('crop-image'),
        ]);
    }
}
