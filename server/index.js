import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuration Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true pour 465, false pour autres ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Fonction pour envoyer un email formaté
const envoyerEmailContact = async (contact) => {
  console.log('4');
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #ec4899, #f43f5e); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #ec4899; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #ec4899; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✨ Nouveau Contact - Chez Franceska Beauté ✨</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">👤 Nom complet :</div>
            <div class="value">${contact.prenom} ${contact.nom}</div>
          </div>
          
          <div class="field">
            <div class="label">📧 Email :</div>
            <div class="value">${contact.email}</div>
          </div>
          
          ${
            contact.message
              ? `
          <div class="field">
            <div class="label">💬 Message :</div>
            <div class="value">${contact.message}</div>
          </div>
          `
              : ''
          }
          
          <div class="field">
            <div class="label">📅 Date de contact :</div>
            <div class="value">${new Date(contact.dateCreation).toLocaleString(
              'fr-FR',
              {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              }
            )}</div>
          </div>
        </div>
        <div class="footer">
          <p>Ce message a été envoyé automatiquement depuis le site web de Franceska Beauté</p>
          <p>Pour répondre, utilisez directement l'adresse email du client : ${
            contact.email
          }</p>
        </div>
      </div>
    </body>
    </html>
  `;
  console.log('5');
  const mailOptions = {
    from: `"Site Franceska Beauté" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `🌸 Nouveau contact de ${contact.prenom} ${contact.nom}`,
    html: htmlContent,
    replyTo: contact.email,
  };
  console.log('6');
  try {
    await transporter.sendMail(mailOptions);
    console.log(
      `✅ Email envoyé pour le contact de ${contact.prenom} ${contact.nom}`
    );
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi de l'email:", error);
    throw error;
  }
};

// MongoDB Connection
// const MONGODB_URI =
//   process.env.MONGODB_URI || 'mongodb://localhost:27017/franceska-beaute';
const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb://texmex430:jesusc@cluster0.sfat6jd.mongodb.net';
// mongodb+srv://texmex430:jesusc@cluster0.sfat6jd.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('✅ Connecté à MongoDB'))
  .catch((err) => console.error('❌ Erreur de connexion MongoDB:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true,
  },
  prenom: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Email invalide'],
  },
  message: {
    type: String,
    trim: true,
  },
  dateCreation: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'API Franceska Beauté fonctionne correctement!' });
});

// Route pour créer un nouveau contact
app.post('/api/contacts', async (req, res) => {
  // log('🔗 Requête de création de contact reçue:', req.body);
  console.log('🔗 Requête de création de contact reçue:', req.body);
  console.log('1');
  console.log('MONGODB_URI' + MONGODB_URI);
  console.log('MONGODB_URI' + process.env.MONGODB_URI);
  console.log('EMAIL_HOST' + process.env.EMAIL_HOST);
  console.log('EMAIL_PORT' + process.env.EMAIL_PORT);
  console.log('EMAIL_USER' + process.env.EMAIL_USER);
  console.log('EMAIL_PASS' + process.env.EMAIL_PASS);
  console.log('EMAIL_TO' + process.env.EMAIL_TO);
  console.log('EMAIL_TO' + process.env.EMAIL_TO);

  try {
    const { nom, prenom, email, message } = req.body;

    // Validation des champs requis
    if (!nom || !prenom || !email) {
      return res.status(400).json({
        error: 'Les champs nom, prénom et email sont obligatoires',
      });
    }

    // Créer un nouveau contact
    const nouveauContact = new Contact({
      nom,
      prenom,
      email,
      message: message || '',
    });
    console.log('2');
    // Sauvegarder en base de données
    const contactSauvegarde = await nouveauContact.save();

    // Envoyer l'email de notification
    // try {
    //   console.log('3');
    //   await envoyerEmailContact(contactSauvegarde);
    // } catch (emailError) {
    //   console.error('⚠️ Contact sauvegardé mais email non envoyé:', emailError);
    //   // On continue même si l'email échoue
    // }

    res.status(201).json({
      message: 'Contact enregistré avec succès!',
      contact: {
        id: contactSauvegarde._id,
        nom: contactSauvegarde.nom,
        prenom: contactSauvegarde.prenom,
        email: contactSauvegarde.email,
        dateCreation: contactSauvegarde.dateCreation,
      },
    });
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du contact:", error);

    if (error.name === 'ValidationError') {
      return res.status(400).json({
        error: 'Données invalides',
        details: Object.values(error.errors).map((err) => err.message),
      });
    }

    res.status(500).json({
      error: 'Erreur interne du serveur',
    });
  }
});

// Route pour récupérer tous les contacts (pour l'administration)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ dateCreation: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Erreur lors de la récupération des contacts:', error);
    res.status(500).json({
      error: 'Erreur lors de la récupération des contacts',
    });
  }
});

// Test de la configuration email
app.get('/api/test-email', async (req, res) => {
  try {
    await transporter.verify();
    res.json({ message: 'Configuration email OK' });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Erreur de configuration email', details: error.message });
  }
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📱 API disponible sur http://localhost:${PORT}/api`);
});
