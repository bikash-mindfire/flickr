<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageGenerator;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FavouriteController;
use App\Http\Controllers\PlaceController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', [ImageGenerator::class, 'getImage']);
Route::post('/login', [UserController::class, 'login']);
Route::get('/fav', [FavouriteController::class, 'getFavImages']);
Route::post('/addfav', [FavouriteController::class, 'addFavImage']);
Route::get('/get-places', [PlaceController::class, 'getPlaces']);
Route::post('/add-new-place', [PlaceController::class, 'addPlace']);