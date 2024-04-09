import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CromosService } from '../../models/data-access/cromos.service';
import { Cromo } from '../../models/Cromo';
import {
  Storage,
  getDownloadURL,
  uploadBytesResumable,
} from '@angular/fire/storage';
import { ref } from 'firebase/storage';
import { CromoInterface } from '../../models/CromoInterface';

@Component({
  selector: 'app-subir-cromo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './subir-cromo.component.html',
  styleUrl: './subir-cromo.component.css',
})
export class SubirCromoComponent {
  cromoForm: FormGroup;
  imagen: File | null = null;
  imagenPreview: string | null = null;
  storage = inject(Storage);
  private _cromosService = inject(CromosService);

  constructor(private fb: FormBuilder) {
    console.log('estoy dentro del constructor');

    this.cromoForm = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      description: ['', Validators.required],
      imagen: ['', Validators.required],
      favorito: ['', false],
    });
    console.log(fb);
  }

  onFileChange(event: any) {
    console.log('Estoy en onFileChange');
    if (event.target.files.length > 0) {
      this.imagen = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagenPreview = reader.result as string;
        // Actualiza la vista previa de la imagen en el HTML
        const preview = document.getElementById(
          'imagen-preview'
        ) as HTMLImageElement;
        if (preview) {
          preview.src = this.imagenPreview;
        }
      };
      if (this.imagen) {
        reader.readAsDataURL(this.imagen);
      }
    }
  }
  urlImg: string = '';
  async uploadFileToStorage(file: File): Promise<string> {
    const timestamp = new Date().getTime();
    const randomName =
      timestamp + '_' + Math.random().toString(36).substring(2);
    const filePath = 'imagenes/' + randomName;

    const fileRef = ref(this.storage, filePath);
    const uploadFile = uploadBytesResumable(fileRef, file);
    await uploadFile;

    const url = await getDownloadURL(fileRef);
    console.log(url);

    return url;
  }

  async crearCromo() {
    console.log('formulario valido ' + this.cromoForm.valid);
    if (this.cromoForm.valid) {
      const url = await this.uploadFileToStorage(this.imagen!);
      const cromoData: CromoInterface = {
        nombre: this.cromoForm.get('nombre')?.value,
        categoria: this.cromoForm.get('categoria')?.value,
        descripcion: this.cromoForm.get('description')?.value,
        imagen: url,
        favorito: false,
      };
      console.log(cromoData);

      try {
        await this._cromosService.crearCromos(cromoData);
      } catch (error) {
        console.log('Fallo al insertar');
      }
    } else {
      console.log('Introduce todos los datos');
    }
  }
}
