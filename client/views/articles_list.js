var articlesData = [
{
  title: 'What is New in Fungal Pharmacotherapeutics?',
  authors: 'Sacha Greif',
  url: 'http://sachagreif.com/introducing-telescope/'
}, 
{
  title: 'Dyschromia in Skin of Color',
  authors: 'Tom Coleman',
  url: 'http://meteor.com'
}, 
{
  title: 'Gender Differences in Alopecia Areata',
  authors: 'Tom Coleman',
  url: 'http://themeteorbook.com'
}
];
Template.articlesList.helpers({
  articles: articlesData
});