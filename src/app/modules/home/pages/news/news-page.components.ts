import { Component } from '@angular/core';

@Component({
  selector: 'news-page',
  templateUrl: './news-page.components.html',
  standalone: true,
})
export class NewsPage {
  news = [
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWeggn7HxMszsbtFxnq8pAP0ftQlU1edPI4q459BZ40vA7NUGgvpxhPcwPPf3n5PD5sM&usqp=CAU'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWeggn7HxMszsbtFxnq8pAP0ftQlU1edPI4q459BZ40vA7NUGgvpxhPcwPPf3n5PD5sM&usqp=CAU'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWeggn7HxMszsbtFxnq8pAP0ftQlU1edPI4q459BZ40vA7NUGgvpxhPcwPPf3n5PD5sM&usqp=CAU'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWeggn7HxMszsbtFxnq8pAP0ftQlU1edPI4q459BZ40vA7NUGgvpxhPcwPPf3n5PD5sM&usqp=CAU'},
    {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWeggn7HxMszsbtFxnq8pAP0ftQlU1edPI4q459BZ40vA7NUGgvpxhPcwPPf3n5PD5sM&usqp=CAU'},
  ]
  constructor() {}
}
