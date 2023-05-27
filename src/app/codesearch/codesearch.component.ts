import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-codesearch',
  templateUrl: './codesearch.component.html',
  styleUrls: ['./codesearch.component.scss']
})
export class CodesearchComponent implements OnInit {

  inputCode: string = '';
  showError: boolean = false;

  constructor(protected router: Router) {
  }

  ngOnInit(): void {
  }

  toMirrorPage(): void {
    console.log("input", this.inputCode);
    this.showError = false;
    if (this.inputCode.toLowerCase() === "зеркало") {
      this.router.navigate(['/mirror'])
    } else if (this.inputCode !=='') {
      this.showError = true;
      setTimeout(()=> {
        this.showError = false;
      }, 3000)

    }

  }
}
