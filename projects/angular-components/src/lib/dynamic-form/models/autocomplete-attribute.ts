/**
 * Liste des valeurs possible pour l'attribut autocomplete
 * (https://accessibilite.numerique.gouv.fr/methode/glossaire/#liste-des-valeurs-possibles-pour-l-attribut-autocomplete)
 */
export enum AutocompleteAttribute {
  Off = "off",

  /** Nom complet */
  Name = "name",

  /** Abréviation, civilité ou titre */
  HonorificPrefix = "honorific-prefix",

  /** Prénom */
  GivenName = "given-name",

  /** Prénoms additionnels */
  AdditionalName = "additional-name",

  /** Nom de famille */
  FamilyName = "family-name",

  /** Suffixe honorifique */
  HonorificSuffix = "honorific-suffix",

  /** Surnom, diminutif */
  Nickname = "nickname",

  /** Fonction, intitulé de poste */
  OrganizationTitle = "organization-title",

  /** Nom d’utilisateur */
  Username = "username",

  /**
   * Nouveau mot de passe (par exemple, lors de la création d’un compte
   * ou d’un changement de mot de passe)
   */
  NewPassword = "new-password",

  /**
   * Mot de passe actuel pour le compte identifié par le champ username
   * (par exemple, lors d’une connexion)
   */
  CurrentPassword = "current-password",

  /**
   * Nom de l’organisation correspondant à la personne, à l’adresse
   * ou à l’information de contact dans les autres champs associés avec ce champ
   */
  Organization = "organization",

  /** Adresse postale (multiligne, nouvelles lignes conservées) */
  StreetAddress = "street-address",

  /** Adresse postale (une ligne par champ, ligne 1) */
  AddressLine1 = "address-line1",

  /** Adresse postale (une ligne par champ, ligne 2) */
  AddressLine2 = "address-line2",

  /** Adresse postale (une ligne par champ, ligne 3) */
  AddressLine3 = "address-line3",

  /** Le niveau administratif le plus détaillé, pour les adresses pourvues de quatre niveaux administratifs */
  AddressLevel4 = "address-level4",

  /** Le troisième niveau administratif, pour les adresses pourvues d’au moins trois niveaux administratifs */
  AddressLevel3 = "address-level3",

  /** Le deuxième niveau administratif, pour les adresses pourvues d’au moins deux niveaux administratifs */
  AddressLevel2 = "address-level2",

  /** Le plus large niveau administratif d’une adresse, c’est-à-dire la province dans laquelle se trouve la localité */
  AddressLevel1 = "address-level1",

  /** Code pays */
  Country = "country",

  /** Nom de pays */
  CountryName = "country-name",

  /**
   * Code postal, code CEDEX (si le CEDEX est présent, ajouter “CEDEX”,
   * et ce qui le suit doit être ajouté dans le champ address-level2)
   */
  PostalCode = "postal-code",

  /** Nom complet figurant sur le moyen de paiement */
  CcName = "cc-name",

  /** Prénom figurant sur le moyen de paiement */
  CcGivenName = "cc-given-name",

  /** Prénoms additionnels figurant sur le moyen de paiement */
  CcAdditionalName = "cc-additional-name",

  /** Nom de famille figurant sur le moyen de paiement */
  CcFamilyName = "cc-family-name",

  /** Code identifiant le moyen de paiement (e.g., un numéro de carte bancaire) */
  CcNumber = "cc-number",

  /** Date d’expiration du moyen de paiement */
  CcExp = "cc-exp",

  /** Le mois de la date d’expiration du moyen de paiement */
  CcExpMonth = "cc-exp-month",

  /** L’année de la date d’expiration du moyen de paiement */
  CcExpYear = "cc-exp-year",

  /**
   * Code de sécurité du moyen de paiement (also known as the card security code (CSC),
   * card validation code (CVC), card verification value (CVV), signature panel code (SPC),
   * credit card ID (CCID), etc.)
   */
  CcCsc = "cc-csc",

  /** Type de moyen de paiement (e.g. Visa) */
  CcType = "cc-type",

  /** La devise qui a la préférence de l’utilisateur lors d’une transaction */
  TransactionCurrency = "transaction-currency",

  /** Le montant qui a la préférence de l’utilisateur lors d’une transaction (e.g., en réponse à une enchère ou à un prix soldé) */
  TransactionAmount = "transaction-amount",

  /** Langue préférée */
  Language = "language",

  /** Date d’anniversaire */
  Bday = "bday",

  /** Le jour de la date d’anniversaire */
  BdayDay = "bday-day",

  /** Le mois de la date d’anniversaire */
  BdayMonth = "bday-month",

  /** L’année de la date d’anniversaire */
  BdayYear = "bday-year",

  /** Identité de genre */
  Sex = "sex",

  /**
   * Page d’accueil ou une autre page Web correspondant à l’organisation, la personne,
   * l’adresse ou à l’information de contact dans les autres champs associés avec ce champ
   */
  Url = "url",

  /**
   * Photographie, icône ou une autre image correspondant à l’organisation, la personne,
   * l’adresse ou à l’information de contact dans les autres champs associés avec ce champ
   */
  Photo = "photo",

  /** Numéro de téléphone complet, y compris le code pays */
  Tel = "tel",

  /** Code pays du numéro de téléphone */
  TelCountryCode = "tel-country-code",

  /** Numéro de téléphone sans la partie code pays, avec un préfixe interne au pays, s’il y a lieu */
  TelNational = "tel-national",

  /** Indicatif régional du numéro de téléphone, avec un préfixe interne au pays, s’il y a lieu */
  TelAreaCode = "tel-area-code",

  /** Numéro de téléphone sans la partie code pays ni l’indicatif régional */
  TelLocal = "tel-local",

  /**
   * La première partie du composant du numéro de téléphone qui suit l’indicatif régional,
   * lorsque ce composant est scindé en deux parties
   */
  TelLocalPrefix = "tel-local-prefix",

  /**
   * La seconde partie du composant du numéro de téléphone qui suit l’indicatif régional,
   * lorsque ce composant est scindé en deux parties
   */
  TelLocalSuffix = "tel-local-suffix",

  /** Numéro de téléphone d’un poste interne */
  TelExtension = "tel-extension",

  /** Adresse électronique */
  Email = "email",

  /**
   * URL correspondant d’un protocole de messagerie instantanée
   * (par exemple, "aim:goim?screenname=example" ou "xmpp:fred@example.net")
   */
  Impp = "impp",
}
