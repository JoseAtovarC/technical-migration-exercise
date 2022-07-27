import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonsService } from './pokemons.service';
import { PokeData } from '../../app/interface/poke-data'
import { of } from 'rxjs'



describe('PokemonsService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: PokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonsService);

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PokemonsService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected pokemons (HttpClient called once)', (done: DoneFn) => {

  })

});
