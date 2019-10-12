import { Directive, ElementRef, OnInit, Renderer2, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
  })


  export class DropdownDirective implements OnInit {
    
    constructor(private elRef: ElementRef, private renderer: Renderer2) { }
    @HostBinding('class.open') isOpen = false;

    ngOnInit(){
    }

    @HostListener('click')
    toggleOpen() {
        this.isOpen = !this.isOpen;
    }


  
  }