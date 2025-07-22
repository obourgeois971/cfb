import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Menu,
  X,
  ChevronRight,
  Heart,
  Shield,
  Award,
  Instagram,
  Facebook,
  Mail,
  Send,
  CheckCircle,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const services = [
    {
      category: 'onglerie',
      name: 'Pose Vernis semi-permanent / Gel sur ongle naturel',
      description: 'Maison Posh + couleur',
      price: '25€',
    },
    {
      category: 'onglerie',
      name: 'Dépose + Pose complète',
      description: 'French / Pose + couleur',
      price: '30€',
    },
    {
      category: 'onglerie',
      name: 'Dépose + Pose complète',
      description: 'French / Pose + couleur',
      price: '28€',
    },
    {
      category: 'onglerie',
      name: 'Dépose + Pose complète',
      description: '',
      price: '30€',
    },
    {
      category: 'onglerie',
      name: 'Pose Gel sur ongle naturel + couleur',
      description: '',
      price: '33€',
    },
    {
      category: 'onglerie',
      name: 'Pose Gel sur ongle naturel + French / Babyboomer',
      description: '',
      price: '40€',
    },
    {
      category: 'onglerie',
      name: 'Dépose + Pose complète (prix à partir de)',
      description: '',
      price: '40€',
    },
    {
      category: 'onglerie',
      name: 'Rallongement gel (pose chez nous, 3 semaines, prix à partir de)',
      description: '',
      price: '38€',
    },
    {
      category: 'onglerie',
      name: 'Extension Simple - Pose sur demi-capsule + couleur',
      description: '',
      price: '50€',
    },
    {
      category: 'onglerie',
      name: 'Pose sur demi-capsule + French',
      description: '',
      price: '55€',
    },
    {
      category: 'onglerie',
      name: 'Pose sur demi-capsule + Babyboomer',
      description: '',
      price: '60€',
    },
    {
      category: 'onglerie',
      name: 'Dépose + Pose complète (à partir de)',
      description: '',
      price: '60€',
    },
    {
      category: 'onglerie',
      name: 'Rallongement gel sur demi-capsule (pose chez nous, prix 3 semaines, prix à partir de)',
      description: '',
      price: '50€',
    },
    {
      category: 'onglerie',
      name: 'Gel X / Pose américaine + couleur',
      description: '',
      price: '45€',
    },
    {
      category: 'onglerie',
      name: 'Pose américaine + French',
      description: '',
      price: '50€',
    },
    {
      category: 'onglerie',
      name: 'Pose américaine + Babyboomer',
      description: '',
      price: '55€',
    },
    {
      category: 'onglerie',
      name: 'Dépose + Pose complète (pose chez nous, prix à partir de)',
      description: '',
      price: '65€',
    },
    {
      category: 'sourcils',
      name: 'Épilation au fil / à la pince',
      description: '',
      price: '12€',
    },
    {
      category: 'sourcils',
      name: 'Restructuration sourcils',
      description: '',
      price: '25€',
    },
    {
      category: 'sourcils',
      name: 'Restructuration, épilation + soin henné',
      description: '',
      price: '32€',
    },
    {
      category: 'cils',
      name: 'Rehaussement cils',
      description: '(+10% teinture)',
      price: '40€',
    },
    {
      category: 'cils',
      name: 'Bouquet rehaussement cils + restructuration sourcils (sans henné ni teinture)',
      description: '',
      price: '55€',
    },
    {
      category: 'cils',
      name: 'Extension cils à cils effet naturel à partir de',
      description: '',
      price: '65€',
    },
    {
      category: 'cils',
      name: 'Pose cils mixte',
      description: '',
      price: '60€',
    },
    {
      category: 'cils',
      name: 'Rallongement (3 semaines) à partir de',
      description: '',
      price: '35€',
    },
    {
      category: 'cils',
      name: 'Extension volume russe 2D-3D à partir de',
      description: '',
      price: '75€',
    },
    {
      category: 'cils',
      name: 'Rallongement (3 semaines) à partir de',
      description: '',
      price: '50€',
    },
  ];

  const handleCall = () => {
    window.location.href = 'tel:+33782388312';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const handleReservation = () => {
  //   window.location.href = 'tel:+32471234567890';
  // };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ nom: '', prenom: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                <a
                  href="#"
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Chez Franceska Beauté
                </a>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#tarifs"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                Tarifs
              </a>
              <a
                href="#galerie"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                Galerie
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700">
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleCall}
              className="hidden md:flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Réserver
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#services"
                  className="block px-3 py-2 text-gray-700 hover:text-pink-600"
                >
                  Services
                </a>
                <a
                  href="#tarifs"
                  className="block px-3 py-2 text-gray-700 hover:text-pink-600"
                >
                  Tarifs
                </a>
                <a
                  href="#galerie"
                  className="block px-3 py-2 text-gray-700 hover:text-pink-600"
                >
                  Galerie
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-gray-700 hover:text-pink-600"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-rose-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="">
                <img
                  src="remise.png"
                  // src="logo.jpg"
                  alt="Offre d'ouverture -10%"
                  className="w-200 lg:h-[100px] object-cover"
                />
              </div>

              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Star className="w-4 h-4 fill-current" />
                valable jusqu'au 02 août 2025
              </div>

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

                  <ChevronRight className="w-5 h-5" />
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
                  <span>
                    Lun-Mar-Jeu-Ven 9h30-18h30
                    <br />
                    Sam 9h00-13h30
                  </span>
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

      {/* Services Overview */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos spécialités
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des prestations de qualité professionnelle pour sublimer votre
              beauté naturelle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-26 h-26 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors">
                {/* <span className="text-2xl">💅</span> */}
                <img src="ongles.png" alt="Nail Icon" className="w-22 h-22" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Onglerie</h3>
              <p className="text-gray-600 mb-4">
                Pose de vernis semi-permanent, extensions gel, acrygèl, pose
                Américaine et nail art créatif
              </p>
              {/* <div className="text-pink-600 font-semibold">À partir de 25€</div> */}
            </div>

            <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-26 h-26 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors">
                {/* <span className="text-2xl">👁️</span> */}
                <img src="sourcils.png" alt="Nail Icon" className="w-18 h-18" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sourcils</h3>
              <p className="text-gray-600 mb-4">
                Épilation, restructuration, henna brow et teinture pour un
                regard parfaitement défini
              </p>
              {/* <div className="text-pink-600 font-semibold">À partir de 12€</div> */}
            </div>

            <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-26 h-26 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors">
                {/* <span className="text-2xl">👀</span> */}
                <img src="cils.png" alt="Nail Icon" className="w-18 h-18" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cils</h3>
              <p className="text-gray-600 mb-4">
                Rehaussement et Extensions des cils : cils à cils, pose mixte et
                volume russe pour un regard intense
              </p>
              {/* <div className="text-pink-600 font-semibold">À partir de 49€</div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="tarifs" className="px-4 py-16 bg-white">
        <div className="bg-white text-gray-800 p-8 font-sans">
          {/* <!-- Titre --> */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nos Prestations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un large éventail de soins pour sublimer vos ongles et vous faire
              sentir belle
            </p>
          </div>

          {/* <!-- Grille responsive 5 colonnes sur desktop, 2 sur mobile --> */}
          <div className="justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-8">
              {/* <!-- Exemple de cellule --> */}
              <div className="bg-orange-50 p-4 rounded-md shadow-sm hover:shadow-md flex flex-col justify-between">
                <h2 className="font-bold text-lg">Épilation au fil-à-pince</h2>
                <span className="text-sm bg-yellow-300 font-semibold mt-2 px-1 inline-block w-max">
                  Sourcil
                </span>
                <span className="ml-auto mt-2">→</span>
              </div>
              <div className="bg-orange-50 p-4 rounded-md shadow-sm hover:shadow-md flex flex-col justify-between">
                <h2 className="font-bold text-lg">Restructuration Complète</h2>
                <span className="text-sm bg-yellow-300 font-semibold mt-2 px-1 inline-block w-max">
                  Sourcil
                </span>
                <span className="ml-auto mt-2">→</span>
              </div>
              <div className="bg-orange-50 p-4 rounded-md shadow-sm hover:shadow-md flex flex-col justify-between">
                <h2 className="font-bold text-lg">Teinture - Henne</h2>
                <span className="text-sm bg-yellow-300 font-semibold mt-2 px-1 inline-block w-max">
                  Sourcil
                </span>
                <span className="ml-auto mt-2">→</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-8">
              <div className="bg-orange-50 p-4 rounded-md shadow-sm hover:shadow-md flex flex-col justify-between">
                <h2 className="font-bold text-lg">
                  Vernis Gel -Semi Permanent - Nail Art Ongles
                </h2>
                <span className="text-sm bg-pink-400 text-white font-semibold mt-2 px-1 inline-block w-max">
                  Ongles Nail art
                </span>
                <span className="ml-auto mt-2">→</span>
              </div>
              <div className="bg-orange-50 p-4 rounded-md shadow-sm hover:shadow-md flex flex-col justify-between">
                <h2 className="font-bold text-lg">Gel X/Pose Américaine</h2>
                <span className="text-sm bg-pink-400 text-white font-semibold mt-2 px-1 inline-block w-max">
                  Ongles Nail art
                </span>
                <span className="ml-auto mt-2">→</span>
              </div>
              <div className="bg-orange-50 p-4 rounded-md shadow-sm hover:shadow-md flex flex-col justify-between">
                <h2 className="font-bold text-lg">Extension en Gel / Pop It</h2>
                <span className="text-sm bg-pink-400 text-white font-semibold mt-2 px-1 inline-block w-max">
                  Ongles Nail art
                </span>
                <span className="ml-auto mt-2">→</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              <div className="bg-orange-50 p-4 rounded-md shadow-sm hover:shadow-md flex flex-col justify-between">
                <h2 className="font-bold text-lg">Rehaussement - Teinture</h2>
                <span className="text-sm bg-blue-200 font-semibold mt-2 px-1 inline-block w-max">
                  Cils
                </span>
                <span className="ml-auto mt-2">→</span>
              </div>
              <div className="bg-orange-50 p-4 rounded-md shadow-sm hover:shadow-md flex flex-col justify-between">
                <h2 className="font-bold text-lg">Extension cils-à-cils</h2>
                <span className="text-sm bg-blue-200 font-semibold mt-2 px-1 inline-block w-max">
                  Cils
                </span>
                <span className="ml-auto mt-2">→</span>
              </div>
              <div className="bg-orange-50 p-4 rounded-md shadow-sm hover:shadow-md flex flex-col justify-between">
                <h2 className="font-bold text-lg">Volume Russe</h2>
                <span className="text-sm bg-blue-200 font-semibold mt-2 px-1 inline-block w-max">
                  Cils
                </span>
                <span className="ml-auto mt-2">→</span>
              </div>
            </div>
          </div>
          {/* <!-- Bouton "Voir plus" --> */}
          {/* <div className="text-center mt-8">
            <button className="border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition">
              Voir nos 72 autres services
            </button>
          </div> */}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi nous choisir ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hygiène irréprochable
              </h3>
              <p className="text-gray-600">
                Matériel stérilisé et protocoles d'hygiène stricts pour votre
                sécurité
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expertise professionnelle
              </h3>
              <p className="text-gray-600">
                Formation certifiée et expérience dans les techniques les plus
                récentes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Satisfaction garantie
              </h3>
              <p className="text-gray-600">
                Votre satisfaction est notre priorité, retouches offertes si
                nécessaire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galerie" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos réalisations
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez quelques-unes de nos créations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'ongle-01.png',
              'ongle-02.jpg',
              'sallon.jpg',
              'sourcil-02.jpg',
              'sourcil-03.jpg',
              'sourcil-04.jpg',
            ].map((src, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl aspect-square"
              >
                <img
                  src={src}
                  alt={`Réalisation ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Horaires d'Ouverture
            </h2>
            <p className="text-gray-600">
              Nous vous accueillons aux heures suivantes
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-gray-800">Lundi</span>
                <span className="text-gray-600">9h30 - 18h30</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-gray-800">Mardi</span>
                <span className="text-gray-600">9h30 - 18h30</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-gray-800">Mercredi</span>
                {/* <span className="text-red-500 font-medium">Fermé</span> */}
                <span className="text-gray-600">9h30 - 18h30</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-gray-800">Jeudi</span>
                <span className="text-gray-600">9h30 - 18h30</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-gray-800">Vendredi</span>
                <span className="text-gray-600">9h30 - 18h30</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-gray-800">Samedi</span>
                <span className="text-gray-600">9h - 15h00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      {/* <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Contactez-nous
            </h2>
            <p className="text-gray-600">
              Laissez-nous vos coordonnées et nous vous recontacterons
              rapidement
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 max-w-2xl mx-auto">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-800">
                  Merci ! Votre message a été envoyé avec succès.
                </span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
                <span className="text-red-800">
                  Une erreur s'est produite. Veuillez réessayer.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="prenom"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="nom"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Votre message ou demande spécifique..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Envoi en cours....
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section> */}

      {/* CTA Sections  */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Prête pour votre transformation ?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Réservez votre rendez-vous dès maintenant et profitez de -10% sur
            votre première prestation
          </p>
          <button
            onClick={handleCall}
            className="bg-white text-pink-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <Phone className="w-5 h-5" />
            07 82 38 83 12
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Chez Franceska Beauté</h3>
              <p className="text-gray-300 mb-4">
                Institut de beauté spécialisé en onglerie, sourcils et cils
              </p>
              <div className="flex items-center gap-2 text-pink-400 mb-2">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm">Offre d'ouverture -10%</span>
              </div>
              <div className="flex items-center gap-2 text-pink-400 mb-2">
                <img
                  src="remise.png"
                  // src="logo.jpg"
                  alt="Manucure professionnelle"
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Nos services</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <div>• Onglerie & Nail Art</div>
                <div>• Sourcils (épilation, restructuration)</div>
                <div>• Cils (extensions, rehaussement)</div>
                <div>• Conseils personnalisés</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>07 82 38 83 12</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Sur rendez-vous uniquement</span>
                </div>
                <div className="flex gap-4">
                  <Instagram className="w-6 h-6 text-pink-400 hover:text-pink-300 cursor-pointer" />
                  <a
                    href="https://www.facebook.com/profile.php?id=61577032143752"
                    className="text-pink-400 hover:underline"
                  >
                    {' '}
                    <Facebook className="w-6 h-6 text-pink-400 hover:text-pink-300 cursor-pointer"></Facebook>
                  </a>
                  <Mail className="w-6 h-6 text-pink-400 hover:text-pink-300 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Chez Franceska Beauté. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
