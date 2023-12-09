import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    HttpClientModule,
    FormsModule,
    
   
  
    
  ],
  exports:[
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    HttpClientModule,
    FormsModule 
    
  
  ]
})
export class SharedModule { }
