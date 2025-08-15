'use client';

import { useState } from 'react';
import {
  Phone,
  Star,
  Instagram,
  Facebook,
  MapPin,
  Clock,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const [selectedService, setSelectedService] = useState('ongles');

  const services = {
    ongles: {
      title: 'ONGLERIE – NAIL’ART',
      subtitle:
        'Pose Vernis semi-permanent / Gel sur ongle naturel / Extension Ongle',
      treatments: [
        {
          name: '(Mains / Pieds) Pose + couleur',
          price: '25€',
          duration: '1h',
        },
        { name: 'Dépose + Pose complète', price: '30€', duration: '1h15' },
        {
          name: 'Pose Gel sur ongle naturel + couleur',
          price: '39€',
          duration: '1h30',
        },
        {
          name: 'Pose Gel sur ongle naturel + French / babyboomer',
          price: '45€',
          duration: '1h45',
        },
        {
          name: 'Dépose + Pose complète (prix à partir de)',
          price: '45€',
          duration: '1h45',
        },
        {
          name: 'Remplissage gel (posé chez nous, 3 semaines, prix à partir de)',
          price: '35€',
          duration: '1h30',
        },

        {
          name: '(Gel X) Pose américaine + couleur',
          price: '49€',
          duration: '1h30',
        },
        {
          name: 'Pose américaine + French',
          price: '54€',
          duration: '1h45',
        },
        {
          name: 'Pose américaine + Babyboomer',
          price: '56€',
          duration: '1h45',
        },
        {
          name: 'Dépose + Pose complète (posé chez nous, prix à partir de)',
          price: '56€',
          duration: '1h45',
        },
      ],
    },
    cils: {
      title: 'Sourcils',
      subtitle: '',
      treatments: [
        {
          name: 'Epilation au fil/à la pince sourcils',
          price: '10€',
          duration: '15min',
        },
        {
          name: 'Forfait Epilation sourcils, lèvre, menton',
          price: '20€',
          duration: '30min',
        },
        {
          name: 'Restructuration sourcils',
          price: '20€',
          duration: '45min',
        },
        {
          name: 'Restructuration, épilation + pose henné',
          price: '30€',
          duration: '1h',
        },
      ],
    },
    sourcils: {
      title: 'Cils',
      subtitle: '',
      treatments: [
        {
          name: 'Rehaussement cils',
          price: '40€(+10€ teinture)',
          duration: '50min',
        },
        {
          name: 'Bouquet rehaussement cils+ restructuration sourcils (sans henné ni teinture)',
          price: '65€',
          duration: '2h',
        },
        {
          name: 'Extension cils à cils effet naturel à partir de',
          price: '55€',
          duration: '1h30',
        },
        { name: 'Pose cils mixte', price: '60€', duration: '2h' },
        { name: 'Extension Volume russe', price: '65€', duration: '2h' },
      ],
    },
  };

  const galleryImages = [
    'ongle-01.png',
    'ongle-02.jpg',
    'sallon.jpg',
    'sourcil-02.jpg',
    'sourcil-03.jpg',
    'sourcil-04.jpg',
    'ongles-03.jpg',
    'sallon-01.jpg',
    'img-01.jpg',
    'img-02.jpg',
    'img-03.jpg',
    'img-04.jpg',
    'img-05.jpg',
    'img-06.jpg',
    'img-07.jpg',
    'img-08.jpg',
  ];

  const handleCall = () => {
    window.location.href = 'tel:+33782388312';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-white" fill="currentColor" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  Chez Franceska Beauté
                </h1>
                <p className="text-sm text-gray-600">
                  Onglerie • Cils • Sourcils
                </p>
              </div>
            </div>
            <Button
              onClick={handleCall}
              className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="h-4 w-4 mr-2" />
              Appelez-nous
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-rose-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Star className="w-4 h-4 fill-current" />
                valable jusqu'au 02 août 2025
              </div> */}

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Chez Franceska Beauté
                <span className="text-pink-600 block">un salon à domicile</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Onglerie, cils et sourcils, un salon cocooning, où
                professionnalisme, écoute et hygiène sont au rendez-vous.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleCall}
                  className="flex items-center justify-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  07 82 38 83 12
                </button>
                <button className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-pink-600 hover:text-pink-600 transition-colors">
                  <a
                    href="#tarifs"
                    className="text-gray-700 hover:text-pink-600 transition-colors"
                  >
                    Voir les tarifs
                  </a>

                  {/* <ChevronRight className="w-5 h-5" /> */}
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Sur rendez-vous
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />À domicile
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Lun-Sam: 9h-19h30</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="sallon.jpg"
                  // src="logo.jpg"
                  alt="Manucure professionnelle"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating card */}
              {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">+100 clientes</p>
                    <p className="text-sm text-gray-600">satisfaites</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Votre beauté, notre passion
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez notre expertise en onglerie, extensions de cils et
            restructuration de sourcils. Un service professionnel dans un cadre
            élégant et relaxant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleCall}
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="h-5 w-5 mr-2" />
              Prendre rendez-vous
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-3 rounded-full transition-all duration-300"
              onClick={() =>
                document
                  .getElementById('gallery')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Voir nos réalisations
            </Button>
          </div>

          <div className="w-480 mt-12 mx-auto rounded-lg overflow-hidden shadow-lg bg-white/70 backdrop-blur-sm">
            <img
              src="remise.png"
              // src="logo.jpg"
              alt="Offre d'ouverture -10%"
              className="w-1/2 h-1/2 object-cover mx-auto rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h3>
            <p className="text-xl text-gray-600">
              Des prestations de qualité pour sublimer votre beauté
            </p>
          </div>

          {/* Service Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg">
              {Object.entries(services).map(([key, service]) => (
                <button
                  key={key}
                  onClick={() => setSelectedService(key)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedService === key
                      ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-rose-600'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h4 className="text-3xl font-bold text-gray-900 mb-2">
                    {services[selectedService as keyof typeof services].title}
                  </h4>
                  <p className="text-lg text-gray-600">
                    {
                      services[selectedService as keyof typeof services]
                        .subtitle
                    }
                  </p>
                </div>
                <div className="grid gap-4">
                  {services[
                    selectedService as keyof typeof services
                  ].treatments.map((treatment, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-all duration-300"
                    >
                      <div>
                        <h5 className="font-semibold text-gray-900">
                          {treatment.name}
                        </h5>
                        <p className="text-sm text-gray-600">
                          Durée : {treatment.duration}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-bold text-rose-600">
                          {treatment.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Réalisations
            </h3>
            <p className="text-xl text-gray-600">
              Découvrez quelques-unes de nos plus belles créations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Réalisation ${index + 1}`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-8">
            Contactez-nous
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-rose-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Adresse</h4>
                <p className="text-gray-600">
                  4 rue de l'entrepôt
                  <br />
                  81200 Mazamet
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-rose-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Téléphone</h4>
                <p className="text-gray-600">07 82 38 83 12</p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-rose-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Horaires</h4>
                <p className="text-gray-600">Lun-Sam: 9h-19h30</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" fill="currentColor" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Chez Franceska Beauté</h4>
                  <p className="text-sm text-gray-300">
                    Onglerie • Cils • Sourcils
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                © 2025 Chez Franceska Beauté. Tous droits réservés.
              </p>
            </div>

            <div className="flex space-x-6">
              <button
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() =>
                  window.open(
                    'https://www.instagram.com/chez_franceska_beaute?igsh=ZWNvcnpneWxpeDlo',
                    '_blank'
                  )
                }
              >
                <Instagram className="h-6 w-6" />
              </button>
              <button
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() =>
                  window.open(
                    'https://www.facebook.com/profile.php?id=61577032143752',
                    '_blank'
                  )
                }
              >
                <Facebook className="h-6 w-6" />
              </button>
              <button></button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
