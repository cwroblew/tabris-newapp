/**
 * Created by cwrob on 11/2/2018.
 */

// import { Marked } from 'marked-ts';

const URL = 'http://www.randomtaco.me/random/?full-taco=true';
const TIMEOUT = 2000;

export function getRandomTaco(): Promise<TacoResponse> {
    return new Promise((resolve, reject) => {
        fetch('http://www.randomtaco.me/random/?full-taco=true')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                resolve(new TacoResponse(json));
            })
            .catch((error) => {
                console.warn(error);
            });
    });
}

// function fetchWithBackoff(url: string, waitTime?: number): Promise<Response>

export class TacoResponse {
    public title: string;
    public recipe: string;
    //public mixin: string;
   // public baseLayer: string;
   // public condiment: string;

    constructor(jsonResponse: any) {
        this.title = jsonResponse.name;
        this.recipe = jsonResponse.recipe;
        //this.mixin = jsonResponse.mixin ? jsonResponse.mixin.recipe : ' ';
        // this.baseLayer = jsonResponse.base_layer ? jsonResponse.base_layer : ' ';
        //this.condiment = jsonResponse.condiment
    }
}