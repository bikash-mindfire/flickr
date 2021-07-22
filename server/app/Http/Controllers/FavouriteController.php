<?php

namespace App\Http\Controllers;
use App\Models\Favourite;

use Illuminate\Http\Request;

class FavouriteController extends Controller
{
    public function getFavImages(Request $request){
        $userid= $request->id;
        $res = Favourite::where('uid', $userid)->get();

        return $res;
    }

    public function addFavImage(Request $request){
        $uid = $request->uid;
        $url = $request->url;

        $fav = Favourite::create([
            'uid' => $uid,
            'image_url' => $url
        ]);

        if($fav){
            return response()->json([
                'success' => true,
                'fav' => $fav
            ], 201);
        }

        return response()->json([
            'success' => false,
            'message' => "Something Went Wrong"
        ], 201);
    }
}
