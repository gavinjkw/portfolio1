import { transition, trigger, style, query, animateChild, animate, group, state } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative'  }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 50,
          left: 0,
          width: '100%',
          margin: '15px 0 0 0',
          // image: "url('/assets/background.jpeg')",
       
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),


    transition('ContactPage <=> PortfolioPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 50,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);