import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnosCrudRoutingModule } from './feature/components/alumnos-crud/alumnos-crud-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { REDUCERS } from './state/app.state';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FeatureModule } from './feature/feature.module';
import { CursosRoutingModule } from './feature/components/cursos/cursos-routing.module';
import { AlumnosAltaRoutingModule } from './feature/components/alumnos-alta/alumnos-alta-routing.module';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    CursosRoutingModule,
    FeatureModule,
    AlumnosCrudRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    AlumnosAltaRoutingModule,
    CoreModule,
    StoreModule.forRoot(REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, name: 'login' }),
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
