export type PanelType = {
  id: number;
  titulo: string[];
  textos: string[];
  imagen: string[];
  button?: {
    label: string;
    action: () => void;
  };
};

export const panels: PanelType[] = [
  {
    id: 1,
    titulo: ['Fast Food CJ'],
    textos: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores aspernatur ex, veniam vitae perferendis harum nulla illum dolorem odit, qui molestiae, enim aliquam ratione blanditiis excepturi optio eligendi necessitatibus?',
    ],
    imagen: ['/asset/img/empanadaaaa.jpg'],

    // button: {
    //    action: ,
    //    label:

    // },
  },

  {
    id: 2,
    titulo: ['Fast Food CJ'],
    textos: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores aspernatur ex, veniam vitae perferendis harum nulla illum dolorem odit, qui molestiae, enim aliquam ratione blanditiis excepturi optio eligendi necessitatibus?',
    ],
    imagen: ['/asset/img/empanadas3.jpg'],

    // button: {
    //    action: ,
    //    label:

    // },
  },

  {
    id: 3,
    titulo: ['Fast Food CJ'],
    textos: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores aspernatur ex, veniam vitae perferendis harum nulla illum dolorem odit, qui molestiae, enim aliquam ratione blanditiis excepturi optio eligendi necessitatibus?',
    ],
    imagen: ['/asset/img/muchasEmpanadas2.jpg'],

    // button: {
    //    action: ,
    //    label:

    // },
  },
];
