<?php

namespace App\Http\Controllers;
use App\Models\Place;

use Illuminate\Http\Request;

class PlaceController extends Controller
{
    public function getPlaces(){

        $res = Place::all();

        return $res;
    }

    public function addPlace(Request $request){
        $name = $request->name;
        $lat = $request->lat;
        $lang = $request->lang;


        $res = Place::where('name', $name)->first();

        if($res){
            return response()->json([
                    'success' => false,
                    'message' => "Name ALready Exist"
                ], 500);
        }

        $newplace = Place::create([
            'name' => $name,
            'lat' => $lat,
            'lang' => $lang
        ]);

        if($newplace){
            return response()->json([
                'success' => true,
                'newplace' => $newplace
            ], 201);
        }

        return response()->json([
            'success' => false,
            'message' => "Something Went Wrong"
        ], 201);
    }

}
