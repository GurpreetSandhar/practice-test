import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUserStoriesList',
})
export class SearchUserStoriesListPipe implements PipeTransform {
  transform(array, searchTerm) {
    if (!array || !searchTerm) {
      return array;
    }
    return array.filter(
      (element) =>
        element.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
