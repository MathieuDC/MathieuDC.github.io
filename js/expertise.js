var expertiseContents = {
  'commercial': {
      content: "<strong class='not-bold'>Karen Benhamou-Koskas</strong> accompagne la vie de l'entreprise dès sa constitution, jusqu' à sa dissolution en passant par tous les litiges qu'une société commerciale peut rencontrer pendant son activité. "+
              "Elle peut vous aider à choisir le type de société qui convient à votre activité  en fonction des critères économiques et comptables choisis. "+ 
              "Elle vous assistera dans les formalités et les étapes  de la création de votre société.<br><br>"+
              "Karen Benhamou-Koskas reste à vos côtés dans chaque étape de la vie de votre entreprise et en particulier pour vous défendre en cas de litiges avec vos clients, vos fournisseurs, vos partenaires. "+
              "Karen Benhamou-Koskas rédige les actes de cession de fonds de commerce et de droit au bail et vous assistera en cas de litige nés de ces acquisitions ou cessions.<br><br>",
      index: 1
  },
  'family': {
      content: "Parce que la vie d'un chef d'entreprise ne se résume pas à celle de sa société, <strong class='not-bold'>Karen Benhamou-Koskas</strong> a décidé d'accompagner aussi le particulier dans les litiges liés au  droit de la Famille et en particulier dans le cadre de divorce dont celui instauré par l'article 229-1 et suivants  du code civil dit \"divorce sans juge\" et dans le cadre des litiges liés aux enfants. "+
              "Elle peut saisir le Juge aux Affaires Familiales près le Tribunal Judiciaire dans le cadre de procédures dite d'urgence concernant l'exercice de droit de visite ou le paiement de pensions alimentaires.",
      index: 2
  },
  'circulation': {
      content: "En partenariat avec un médecin spécialisé en  matière d'évaluation des préjudices corporels et avec une équipe de praticiens <strong class='not-bold'>Karen Benhamou-Koskas</strong> vous accompagnera dans toutes les étapes consécutives à un accident de la circulation: "+
              "<i class='not-italic colored'>l'expertise médicale</i> qui permettra de quantifier vos préjudices et "+
              "<i class='not-italic colored'>l'indemnisation des préjudices</i> qui s'inscrit dans un cadre amiable ou judiciaire. "+
              "Karen Benhamou-Koskas  défendra au mieux vos intérêts si l'offre d'indemnisation est insuffisante, un juge sera saisi  aux fins de désignation d'un expert afin d'obtenir une juste indemnisation des préjudices subis.",
      index: 3
  },
  'real-estate': {
      content: "Si vous êtes Bailleur,<strong class='not-bold'>Karen Benhamou-Koskas</strong> défendra vos  intérêts en cas de locataires indigents qu'il s'agisse d'un bail commercial ou d'un bail à usage d'habitation, elle vous accompagnera dans la phase préparatoire de rédaction du bail, dans la phase judiciaire en saisissant le Tribunal Judiciaire mais aussi dans la phase d'expulsion en collaboration avec une étude d'huissiers efficace et réactive avec qui elle a mis un partenariat en place depuis 28 ans. ",
      index: 4
  },
  'mediation': {
      content: "Pendant 15 ans <strong class='not-bold'>Karen Benhamou-Koskas</strong> est intervenue comme membre de <a href=''>l'Association de Soutien à la Médiation et aux Antennes Juridiques</a> en qualité d'Avocat médiateur (voulu par les parties ou imposé par le procureur). "+
      "Son expérience lui a permis de constater que très souvent la voie judiciaire empruntée par le particulier ou l'entreprise ne les satisfait pas totalement. "+
      "<br><br>La décision de Justice obtenue ne répond pas à toutes les attentes du justiciable."+
      "La Médiation est alors une alternative au Procès. "+
      "Elle permet à chaque partie au litige de réinvestir son rôle dans la mise en place de solutions au conflit et ce quel qu'en soit sa nature. "+
      "Le Processus de Médiation permet d'entendre chaque partie séparément en lui accordant un temps unique consacré à son écoute, de cibler les demandes de chacun, les attentes, les ressentis, les interrogations et les besoins. "+
      "<br><br>Dans un second temps les parties se rencontrent en présence de<strong class='not-bold'>Karen Benhamou-Koskas</strong> dans son rôle d'Avocat-Médiateur pour, à l'issue de plusieurs rendez vous si nécessaire, mettre en place un accord émanant des  protagonistes eux mêmes qui satisfera chacun d'eux, sous le contrôle de l'Avocat Médiateur. "+
      "Cet accord sera alors formalisé par un écrit qui liera les parties et qui pourra, si elles le souhaitent,  être validé par un Tribunal. "+
      "<strong class='not-bold'>Karen Benhamou-Koskas</strong> à présent Médiateur pour la cour d'Appek d'Aix en Provence est saisie par les tribunaux et la Cour pour mettre en place une médiation judiciaire imposé par le Juge dans différent domaine du Droit."+
      "<strong class='not-bold'>Karen Benhamou-Koskas</strong> est précursseur: elle fait partie de la première liste de médiateurs nommés par la cour d'Appel d'Aix en Provence.<br><br>",
      index: 5
  }
}

function getAnchorPoint(idExpertise, rows){
  if(rows == 1){
      return 'mdc-expertise-button-mediation';
  }
  if(rows == 2){
      if(expertiseContents[idExpertise].index >= 1 && expertiseContents[idExpertise].index <= 3){
          return 'mdc-expertise-button-circulation';
      }
      return 'mdc-expertise-button-mediation';
  }
  if(rows == 3){
      if(expertiseContents[idExpertise].index == 1 || expertiseContents[idExpertise].index == 2){
          return 'mdc-expertise-button-family';
      }
      if(expertiseContents[idExpertise].index == 3 || expertiseContents[idExpertise].index == 4){
          return 'mdc-expertise-button-real-estate';
      }
      return 'mdc-expertise-button-mediation';
  }
  if(rows == 5){
      return 'mdc-expertise-button-' + idExpertise;
  }
}

function createExpertiseHtml(idExpertise){
  div = document.createElement('div');
  div.classList.add('mdc-expertise-content-container');
  e = document.createElement('p');
  e.innerHTML = expertiseContents[idExpertise].content;
  e.id = 'mdc-expertise-' + idExpertise;
  e.classList.add('mdc-expertise-content');
  div.appendChild(e);
  return div;
}

function insertExpertiseContents(rows){
  Object.keys(expertiseContents).forEach(idExpertise =>{
      let htmlEl = createExpertiseHtml(idExpertise);
      let idAnchor = getAnchorPoint(idExpertise, rows);
      let button = document.getElementById(idAnchor);
      button.parentNode.insertBefore(htmlEl, button.nextSibling);
  })
}

function getNbRows(){
  windowWidth = window.innerWidth;
  if(windowWidth > 920){
    return 1;
  }
  if(windowWidth > 651 && windowWidth <= 920){
    return 2;
  }
  if(windowWidth > 451 && windowWidth <= 650){
    return 3;
  }
  return 5;
}

insertExpertiseContents(getNbRows());

/* ================================== */

function disactivateContents(){
  contents = document.getElementsByClassName('mdc-expertise-content');
  for(let content of contents){
      if(content.classList.contains('active'))
      content.classList.remove('active');
      content.style.maxHeight = '0';
  }
}

function disactivateButtons(){
  buttons = document.getElementsByClassName('mdc-expertise-button');
  for(let button of buttons){
      button.classList.remove('active');
  }
}

function handleExpertiseClick(expertise){
  let idButton = 'mdc-expertise-button-' + expertise;
  let idContent = 'mdc-expertise-' + expertise;
  
  let button = document.getElementById(idButton);
  let isButtonActive = button.classList.contains('active');
  disactivateButtons();
  if(!isButtonActive){
      button.classList.toggle('active'); 
  }

  let content = document.getElementById(idContent);
  let isContentActive = content.classList.contains('active');

  disactivateContents();
  if(!isContentActive){
      content.classList.add('active');
      content.style.maxHeight = content.scrollHeight + "px";  
  }
}
