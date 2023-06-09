/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Imdb } from "./api/resources/imdb/client/Client";

export declare namespace SueljeApiClient {
    interface Options {
        environment: core.Supplier<string>;
    }
}

export class SueljeApiClient {
    constructor(protected readonly options: SueljeApiClient.Options) {}

    protected _imdb: Imdb | undefined;

    public get imdb(): Imdb {
        return (this._imdb ??= new Imdb(this.options));
    }
}
