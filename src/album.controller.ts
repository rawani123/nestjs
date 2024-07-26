import { Controller,Get } from '@nestjs/common';

@Controller('/albums')
export class AlbumController {
    @Get()
    getAllAlbums(): string {
        return 'This is the albums route';
    }
}