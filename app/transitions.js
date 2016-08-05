export default function(){
  //from index
  this.transition(
    this.fromRoute('index'),
    this.toRoute('sponsers'),
    this.use('toUp'),
    this.reverse('toDown')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('contact'),
    this.use('toUp'),
    this.reverse('toDown')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('team'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('club'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  //from sponsers
  this.transition(
    this.fromRoute('sponsers'),
    this.toRoute('contact'),
    this.use('toDown'),
    this.reverse('toUp')
  );
  this.transition(
    this.fromRoute('sponsers'),
    this.toRoute('team'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('sponsers'),
    this.toRoute('club'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  //from contact
  this.transition(
    this.fromRoute('contact'),
    this.toRoute('team'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('contact'),
    this.toRoute('club'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};