import { Injectable } from '@angular/core';

// export interface IData {
//   zuccaciye,
//   elektronik,
//   evTekstil,
// }

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  category = [
    
    { categoryItem: 'Elektronik'},
    { categoryItem: 'Giyim' },
    { categoryItem: 'Kozmetik' },
    { categoryItem: 'Mutfak Eşyaları' },
    { categoryItem: 'Ev Tekstil' },
  ]
}
