import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {checkIfProductExistApi} from '../api/product-service';

@Component({
  selector: 'app-specific',
  templateUrl: './specific.component.html',
  styleUrls: ['./specific.component.css']
})
export class SpecificComponent {
  id: number | undefined;
  message: string | null = null;
  exist: boolean;
  constructor(private router: Router) {
  }

  async handleSubmit() {
    if (this.id === undefined) {
      this.message = 'Id cannot be empty!!';
      return;
    }
    await checkIfProductExistApi(this.id)
      .then(response => {
      this.exist = response.data;
    })
      .catch(error => {
        console.error('Error:', error);
      });
    if (this.exist) {
      this.router.navigate([`/specific-prod-detail/${this.id}`]);
    } else {
      this.message = 'Product doesn\'t exist!!';
      return;
    }
  }
}
