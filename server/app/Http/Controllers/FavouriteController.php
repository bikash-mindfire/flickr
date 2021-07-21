<?php

namespace App\Http\Controllers;
use App\Models\Favourite;

use Illuminate\Http\Request;

class FavouriteController extends Controller
{
    public function getFavImages(Request $request){
        $res = Favourite::where('uid', 2)->get();

        return $res;
    }

    public function addFavImage(Request $request){
        $uid = $request->uid;
        $url = $request->url;

        $fav = Favourite::create([
            'uid' => $uid,
            'image_url' => $url
        ]);

        return $fav;
    }
}
