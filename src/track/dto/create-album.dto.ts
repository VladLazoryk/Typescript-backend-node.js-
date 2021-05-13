import {ObjectId} from "mongoose";

export class createAlbumDto {
    readonly name: string;
    readonly artist: string;
    readonly text: string;
    readonly listens: string;
    readonly picture: string;
    readonly audio: string; 
}
