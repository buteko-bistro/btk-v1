import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';



class AnimationGenerator{

  
    public swipeEL(dir:"left"|"right"|"up"|"down", width = '38rem'){
        
        let translateTag = 'translate';
        let directionSign = 1;

        switch (dir) {
            case "left":
                translateTag += 'X'                
                break;
            case "right":
                translateTag += 'X'
                directionSign = -1
                break;
            case "up":
                translateTag += 'Y'
                break;
            case "down":
                translateTag += 'Y'
                directionSign = -1
                break;
            default:
                break;
        }


        return  [
            query(':enter, :leave', style({ position: 'fixed', width: width }), { optional: true }),

            group([  
              query(':enter', [
                style({ transform: translateTag+'(' + directionSign*100 + '%)', opacity: 0 }),
                animate('0.6s ease-in-out', style({ transform: translateTag+'(' + 0 + '%)' , opacity: 1}))
              ], { optional: true }),
              query(':leave', [
                style({ transform: translateTag+'(' + 0 + '%)', opacity: 1 }),
                animate('0.6s ease-in-out', style({ transform: translateTag+'(' + directionSign*-100 + '%)', opacity: 0 }))
              ], { optional: true }),
            ])
          ];
    }


    

}

export const AG = new AnimationGenerator();