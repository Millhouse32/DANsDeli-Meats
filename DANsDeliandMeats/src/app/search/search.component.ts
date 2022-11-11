import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

interface FilterProductType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filterProduct:FilterProductType[] = [
    { value: 'all', viewValue: 'All Products' },
    { value: 'beef', viewValue: 'Beef Products' },
    { value: 'pork', viewValue: 'Pork Products' },
    { value: 'chicken', viewValue: 'Chicken Products' }
  ]

  tempCart:any = [];

   searchTerm = '';
   hasSearched = false;
   form: FormGroup = new FormGroup({});
   selectedOption = 'all';
   searchResults = ['false'];
   displayedColumns: string[] = ['Product', 'Price', 'Quantity', 'AddToCart'];

  constructor(
    private formBuilder: FormBuilder,
    public appService: AppService
  ) { 
    this.form = formBuilder.group({
      search: [null, [Validators.required]],
      product: []
    });


  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value);
    var body = {
      "keyword" : this.form.value['search']
    };
    if (this.selectedOption == 'all') {
      this.appService.SearchAll(body).subscribe(
        response => {
          this.searchResults = response[0];
          console.log(this.searchResults);
          this.hasSearched = true;
        },
        error => {
          console.log(error);
        }
    );
    }
    else if (this.selectedOption == 'beef') {
      this.appService.SearchBeef(body).subscribe(
        response => {
          console.log(response);
          this.searchResults = response[0];
          this.hasSearched = true;
        },
        error => {
          console.log(error);
        }
    );
    }
    else if (this.selectedOption == 'pork') {
      this.appService.SearchPork(body).subscribe(
        response => {
          console.log(response);
          this.searchResults = response[0];
          this.hasSearched = true;
        },
        error => {
          console.log(error);
        }
    );
    }
    else if (this.selectedOption == 'chicken') {
      this.appService.SearchChicken(body).subscribe(
        response => {
          this.searchResults = response[0];
          console.log(this.searchResults);
          this.hasSearched = true;
        },
        error => {
          console.log(error);
        }
    );
    }
  }

  filterChange(event: any) {
    this.selectedOption = event;
  }

  AddToTempCart(val: any) {

    var input = document.getElementById(val['PLU']) as HTMLInputElement | null;
    if (input != null) {
      var quantity = input.value;
      if (quantity != "") {
      var body = {
        'Price' : val['Price'],
        'Product' : val['Item'],
        'PLU' : val['PLU'],
        'Quantity' : quantity
      };
      this.tempCart.push(body); 
    }
    }
    console.log(this.tempCart);
    }
  }
