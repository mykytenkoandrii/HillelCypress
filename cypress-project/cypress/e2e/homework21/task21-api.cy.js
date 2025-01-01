/// <reference types="cypress" />
import 'cypress-plugin-api'

describe('Homework21', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
  });

  describe('Homework21 API test cases', () => {
    beforeEach(() => {
      const userBody = {
        "email": "testdata+hillel2@gmail.com",
        "password": "!sSq&m1L2Xader",
        "remember": false
      }
  
      cy.api('POST', '/api/auth/signin', userBody).then((response) => {
        const sidCookie = response.headers['set-cookie'][0];
        const sidValue = sidCookie.split(';')[0].split('=')[1];
        cy.setCookie('sid', sidValue);
      });
    });

    it('Check successful car creation (status code and data)', () => {
        const carBody = {
          "carBrandId": 1,
          "carModelId": 1,
          "mileage": 11111
        }

        cy.api('POST', 'api/cars', carBody).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body.data.carBrandId).to.eq(1);
          expect(response.body.data.carModelId).to.eq(1);
          expect(response.body.data.initialMileage).to.eq(11111);
      });
    });

    it('Check successful car update (status code and data)', () => {
      const carBody = {
        "carBrandId": 1,
        "carModelId": 2,
        "mileage": 1111
      }

      const updatedCar = {
        "carBrandId": 1,
        "carModelId": 3,
        "mileage": 1112
      }

      cy.api('POST', 'api/cars', carBody).then((response) => {
      expect(response.status).to.eq(201);
      const carId = response.body.data.id;

      cy.request('PUT', `/api/cars/${carId}`, updatedCar).then((response) => {
        
        expect(response.status).to.eq(200);
        expect(response.body.data.carModelId).to.eq(3);
        expect(response.body.data.mileage).to.eq(1112);
      })
    });
    });

    it('Check car brand and model after update (data by id)', () => {
    const carBody = {
      "carBrandId": 3,
      "carModelId": 11,
      "mileage": 10000
    }

    const updatedCar = {
      "carBrandId": 5,
      "carModelId": 23,
      "mileage": 10000
    }

    cy.api('POST', 'api/cars', carBody).then((response) => {
    expect(response.status).to.eq(201);
    const carId = response.body.data.id;
    
    cy.api('PUT', `/api/cars/${carId}`, updatedCar).then((response) => {
    expect(response.status).to.eq(200);

    cy.request('GET', `/api/cars/${carId}`).then((response) => {
      expect(response.body.data.carBrandId).to.eq(5);
      expect(response.body.data.carModelId).to.eq(23);
      expect(response.body.data.brand).to.eq('Fiat');
      expect(response.body.data.model).to.eq('Scudo');
      expect(response.body.data.logo).to.eq('fiat.png');
    });
    });
  });
    });

    it('Check car brands list (status and data)', () => {
      const carBrands = ['Audi', 'BMW', 'Ford', 'Porsche', 'Fiat'];

      cy.api('GET', 'api/cars/brands').then((response) => {
        carBrands.forEach((carBrand, index) => {
          expect(response.body.data[index].title).to.eq(carBrand);
        })
    });
    });

    it('Check car brand (data by id)', () => {
      cy.api('GET', 'api/cars/brands/4').then((response) => {
        expect(response.body.data.id).to.eq(4);
        expect(response.body.data.title).to.eq('Porsche');
        expect(response.body.data.logoFilename).to.eq('porsche.png');
    });
    });

    it('Check successful car deletion (status code)', () => {
      const carBody = {
        "carBrandId": 2,
        "carModelId": 7,
        "mileage": 22222
      }

      cy.api('POST', 'api/cars', carBody).then((response) => {
        expect(response.status).to.eq(201);
        
        const carId = response.body.data.id;
        
        cy.api('DELETE', `/api/cars/${carId}`).then((response) => {
          expect(response.status).to.eq(200);
        });
    });
    });
    after(() =>{
      cy.api('GET', 'api/cars').then((response) => {
        const userCars = response.body.data;
        let carId;
        
        userCars.forEach((car) => {
          carId = car.id;
          cy.api('DELETE', `/api/cars/${carId}`).then((response) => {
            expect(response.status).to.eq(200);
        });
        });
      });
    });
  });
});