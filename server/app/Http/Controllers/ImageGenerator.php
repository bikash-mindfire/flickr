<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class ImageGenerator extends Controller
{
    public function getImage(Request $request){

        $lat = $request->lat;
        $lang = $request->lang;
        $page = $request->page;

        $locate = "https://api.opencagedata.com/geocode/v1/json?key=061826187d9e44eca59834c5a3812a95&q=".$lat."%2C".$lang."&pretty=1&no_annotations=1";
        $location_details = Http::get($locate);

        $location = $location_details['results'][0]['components']['state'];

        $url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8c67949933d12724efcc970691b612a6&format=json&nojsoncallback=1&per_page=10&text=".$location."&page=".$page;
        $response = Http::get($url);

        return $response;
    }
}
