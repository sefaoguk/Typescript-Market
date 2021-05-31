import { Injectable } from '@angular/core';

export interface IData {
  category: string;
  img: string;
  product: string;
  newPrice: number;
  oldPrice: number;
  feature: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor() { }
  data: IData[] = [{
    category: 'Mutfak Eşyaları',
    img: 'https://www.korkmazstore.com.tr/korkmaz-terra-72-parca-catal-kasik-bicak-seti-a2438-12-kisilik-catal-kasik-bicak-seti-7417-81-B.jpg',
    product: 'Korkmaz 12 Kişilik Çatal Takımı',
    newPrice: 15,
    oldPrice:null,
    feature: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, obcaecati iste excepturi, nam quaerat non amet sunt eligendi enim assumenda laudantium ad ratione porro voluptas optio nemo eius nesciunt distinctio dolor. Totam illum voluptates perferendis quam sed ex earum debitis ducimus, necessitatibus ipsum in. Eos accusamus, aperiam exercitationem ullam eveniet quidem possimus a quae perspiciatis! Sit dicta nesciunt repudiandae, iusto assumenda deserunt ducimus, nemo nostrum molestiae culpa nisi perspiciatis facilis, laudantium beatae. Tenetur harum debitis natus accusantium. Natus consequatur magnam dolore esse ipsa at, itaque error voluptatum molestias corporis aspernatur minima cupiditate rerum dicta voluptatibus quod eveniet aut explicabo! Sed.',
  },
  {
    category: 'Mutfak Eşyaları',
    img: 'https://kutahyaporselen.com/zeugma-21-cm-cukur-tb-safari-coll-10289-cukur-tabaklar-kutahya-porselen-12662-98-B.jpg',
    product: 'Kütahya Porselen Tabak Takımı',
    newPrice: 20,
    oldPrice:null,
    feature: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, obcaecati iste excepturi, nam quaerat non amet sunt eligendi enim assumenda laudantium ad ratione porro voluptas optio nemo eius nesciunt distinctio dolor. Totam illum voluptates perferendis quam sed ex earum debitis ducimus, necessitatibus ipsum in. Eos accusamus, aperiam exercitationem ullam eveniet quidem possimus a quae perspiciatis! Sit dicta nesciunt repudiandae, iusto assumenda deserunt ducimus, nemo nostrum molestiae culpa nisi perspiciatis facilis, laudantium beatae. Tenetur harum debitis natus accusantium. Natus consequatur magnam dolore esse ipsa at, itaque error voluptatum molestias corporis aspernatur minima cupiditate rerum dicta voluptatibus quod eveniet aut explicabo! Sed.',
  },
  {
    category: 'Mutfak Eşyaları',
    img: 'https://productimages.hepsiburada.net/s/20/375/9881075089458.jpg',
    product: '5\'li Mutfak Gereçleri',
    newPrice: 5,
    oldPrice:null,
    feature: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, obcaecati iste excepturi, nam quaerat non amet sunt eligendi enim assumenda laudantium ad ratione porro voluptas optio nemo eius nesciunt distinctio dolor. Totam illum voluptates perferendis quam sed ex earum debitis ducimus, necessitatibus ipsum in. Eos accusamus, aperiam exercitationem ullam eveniet quidem possimus a quae perspiciatis! Sit dicta nesciunt repudiandae, iusto assumenda deserunt ducimus, nemo nostrum molestiae culpa nisi perspiciatis facilis, laudantium beatae. Tenetur harum debitis natus accusantium. Natus consequatur magnam dolore esse ipsa at, itaque error voluptatum molestias corporis aspernatur minima cupiditate rerum dicta voluptatibus quod eveniet aut explicabo! Sed.',
  },
  {
    category: 'Elektronik',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDS7Lv_oBMdg7Z1zA2ZR36rt0FI2Qr1QXk9A&usqp=CAU',
    product: 'Macbook Pro Bilgisayar',
    newPrice: 3500,
    oldPrice:3900,
    feature: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, obcaecati iste excepturi, nam quaerat non amet sunt eligendi enim assumenda laudantium ad ratione porro voluptas optio nemo eius nesciunt distinctio dolor. Totam illum voluptates perferendis quam sed ex earum debitis ducimus, necessitatibus ipsum in. Eos accusamus, aperiam exercitationem ullam eveniet quidem possimus a quae perspiciatis! Sit dicta nesciunt repudiandae, iusto assumenda deserunt ducimus, nemo nostrum molestiae culpa nisi perspiciatis facilis, laudantium beatae. Tenetur harum debitis natus accusantium. Natus consequatur magnam dolore esse ipsa at, itaque error voluptatum molestias corporis aspernatur minima cupiditate rerum dicta voluptatibus quod eveniet aut explicabo! Sed.',
  },
  {
    category: 'Elektronik',
    img: 'https://tiimg.tistatic.com/fp/1/005/699/branded-computer-mouse-877.jpg',
    product: 'Dell 2.5GHz Mouse',
    newPrice: 20,
    oldPrice:null,
    feature: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, obcaecati iste excepturi, nam quaerat non amet sunt eligendi enim assumenda laudantium ad ratione porro voluptas optio nemo eius nesciunt distinctio dolor. Totam illum voluptates perferendis quam sed ex earum debitis ducimus, necessitatibus ipsum in. Eos accusamus, aperiam exercitationem ullam eveniet quidem possimus a quae perspiciatis! Sit dicta nesciunt repudiandae, iusto assumenda deserunt ducimus, nemo nostrum molestiae culpa nisi perspiciatis facilis, laudantium beatae. Tenetur harum debitis natus accusantium. Natus consequatur magnam dolore esse ipsa at, itaque error voluptatum molestias corporis aspernatur minima cupiditate rerum dicta voluptatibus quod eveniet aut explicabo! Sed.',
  },
  {
    category: 'Elektronik',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXJA2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1580420177108',
    product: 'Beats Kulaklık',
    newPrice: 35,
    oldPrice:null,
    feature: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, obcaecati iste excepturi, nam quaerat non amet sunt eligendi enim assumenda laudantium ad ratione porro voluptas optio nemo eius nesciunt distinctio dolor. Totam illum voluptates perferendis quam sed ex earum debitis ducimus, necessitatibus ipsum in. Eos accusamus, aperiam exercitationem ullam eveniet quidem possimus a quae perspiciatis! Sit dicta nesciunt repudiandae, iusto assumenda deserunt ducimus, nemo nostrum molestiae culpa nisi perspiciatis facilis, laudantium beatae. Tenetur harum debitis natus accusantium. Natus consequatur magnam dolore esse ipsa at, itaque error voluptatum molestias corporis aspernatur minima cupiditate rerum dicta voluptatibus quod eveniet aut explicabo! Sed.',
  },
  {
    category: 'Ev Tekstil',
    img: 'https://cdn.krc.com.tr/image/cdndata/1/0/8680214111222.jpg',
    product: 'Özdilek Yastık Kılıfı',
    newPrice: 30,
    oldPrice:null,
    feature: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, obcaecati iste excepturi, nam quaerat non amet sunt eligendi enim assumenda laudantium ad ratione porro voluptas optio nemo eius nesciunt distinctio dolor. Totam illum voluptates perferendis quam sed ex earum debitis ducimus, necessitatibus ipsum in. Eos accusamus, aperiam exercitationem ullam eveniet quidem possimus a quae perspiciatis! Sit dicta nesciunt repudiandae, iusto assumenda deserunt ducimus, nemo nostrum molestiae culpa nisi perspiciatis facilis, laudantium beatae. Tenetur harum debitis natus accusantium. Natus consequatur magnam dolore esse ipsa at, itaque error voluptatum molestias corporis aspernatur minima cupiditate rerum dicta voluptatibus quod eveniet aut explicabo! Sed.',
  },
  {
    category: 'Ev Tekstil',
    img: 'https://ae01.alicdn.com/kf/HTB1HhhobE_rK1Rjy0Fcq6zEvVXae/Yeni-3D-Tokyo-japonya-karikat-r-animasyon-Inuyasha-dijital-bask-tek-yorgan-yorgan-yatak-rt-s.jpg_640x640.jpg',
    product: 'Bellona Polyester Yorgan',
    newPrice: 150,
    oldPrice:180,
    feature: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, obcaecati iste excepturi, nam quaerat non amet sunt eligendi enim assumenda laudantium ad ratione porro voluptas optio nemo eius nesciunt distinctio dolor. Totam illum voluptates perferendis quam sed ex earum debitis ducimus, necessitatibus ipsum in. Eos accusamus, aperiam exercitationem ullam eveniet quidem possimus a quae perspiciatis! Sit dicta nesciunt repudiandae, iusto assumenda deserunt ducimus, nemo nostrum molestiae culpa nisi perspiciatis facilis, laudantium beatae. Tenetur harum debitis natus accusantium. Natus consequatur magnam dolore esse ipsa at, itaque error voluptatum molestias corporis aspernatur minima cupiditate rerum dicta voluptatibus quod eveniet aut explicabo! Sed.',
  },
  {
    category: 'Ev Tekstil',
    img: 'https://img.mizalle.com/penye-havlu-bej-5013-13-B.jpg',
    product: 'Özdilek El Havlusu',
    newPrice: 10,
    oldPrice:null,
    feature: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, obcaecati iste excepturi, nam quaerat non amet sunt eligendi enim assumenda laudantium ad ratione porro voluptas optio nemo eius nesciunt distinctio dolor. Totam illum voluptates perferendis quam sed ex earum debitis ducimus, necessitatibus ipsum in. Eos accusamus, aperiam exercitationem ullam eveniet quidem possimus a quae perspiciatis! Sit dicta nesciunt repudiandae, iusto assumenda deserunt ducimus, nemo nostrum molestiae culpa nisi perspiciatis facilis, laudantium beatae. Tenetur harum debitis natus accusantium. Natus consequatur magnam dolore esse ipsa at, itaque error voluptatum molestias corporis aspernatur minima cupiditate rerum dicta voluptatibus quod eveniet aut explicabo! Sed.',
  },
  {
    category: 'Giyim',
    img: 'https://www.ayakkabicity.com/Uploads/UrunResimleri/buyuk/sanzelize-k-07-kadin-sneaker-ayakkabi-47cd.jpg',
    product: 'VAN\'s Ayakkabı',
    newPrice: 600,
    oldPrice:780,
    feature: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, obcaecati iste excepturi, nam quaerat non amet sunt eligendi enim assumenda laudantium ad ratione porro voluptas optio nemo eius nesciunt distinctio dolor. Totam illum voluptates perferendis quam sed ex earum debitis ducimus, necessitatibus ipsum in. Eos accusamus, aperiam exercitationem ullam eveniet quidem possimus a quae perspiciatis! Sit dicta nesciunt repudiandae, iusto assumenda deserunt ducimus, nemo nostrum molestiae culpa nisi perspiciatis facilis, laudantium beatae. Tenetur harum debitis natus accusantium. Natus consequatur magnam dolore esse ipsa at, itaque error voluptatum molestias corporis aspernatur minima cupiditate rerum dicta voluptatibus quod eveniet aut explicabo! Sed.',
  },

  {
    category: 'Giyim',
    img: 'https://st-hummel.mncdn.com/Content/media/ProductImg/original/208384-8024-isam-sweatshirt-637347645213970258.jpg',
    product: 'Hummel Sweatshirt',
    newPrice: 120,
    oldPrice:null,
    feature: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, obcaecati iste excepturi, nam quaerat non amet sunt eligendi enim assumenda laudantium ad ratione porro voluptas optio nemo eius nesciunt distinctio dolor. Totam illum voluptates perferendis quam sed ex earum debitis ducimus, necessitatibus ipsum in. Eos accusamus, aperiam exercitationem ullam eveniet quidem possimus a quae perspiciatis! Sit dicta nesciunt repudiandae, iusto assumenda deserunt ducimus, nemo nostrum molestiae culpa nisi perspiciatis facilis, laudantium beatae. Tenetur harum debitis natus accusantium. Natus consequatur magnam dolore esse ipsa at, itaque error voluptatum molestias corporis aspernatur minima cupiditate rerum dicta voluptatibus quod eveniet aut explicabo! Sed.',
  },
  {
    category: 'Giyim',
    img: 'https://www.english-heritageshop.org.uk/imagprod/imaglarg/little-nipper-kids-tshirt-red0.jpg',
    product: 'Defacto Kids Shirt',
    newPrice: 50,
    oldPrice:null,
    feature: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, obcaecati iste excepturi, nam quaerat non amet sunt eligendi enim assumenda laudantium ad ratione porro voluptas optio nemo eius nesciunt distinctio dolor. Totam illum voluptates perferendis quam sed ex earum debitis ducimus, necessitatibus ipsum in. Eos accusamus, aperiam exercitationem ullam eveniet quidem possimus a quae perspiciatis! Sit dicta nesciunt repudiandae, iusto assumenda deserunt ducimus, nemo nostrum molestiae culpa nisi perspiciatis facilis, laudantium beatae. Tenetur harum debitis natus accusantium. Natus consequatur magnam dolore esse ipsa at, itaque error voluptatum molestias corporis aspernatur minima cupiditate rerum dicta voluptatibus quod eveniet aut explicabo! Sed.',
  },
  {
    category: 'Kozmetik',
    img: 'https://productimages.hepsiburada.net/s/1/375/9523023642674.jpg',
    product: 'Parfüm',
    newPrice: 180,
    oldPrice:210,
    feature: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, obcaecati iste excepturi, nam quaerat non amet sunt eligendi enim assumenda laudantium ad ratione porro voluptas optio nemo eius nesciunt distinctio dolor. Totam illum voluptates perferendis quam sed ex earum debitis ducimus, necessitatibus ipsum in. Eos accusamus, aperiam exercitationem ullam eveniet quidem possimus a quae perspiciatis! Sit dicta nesciunt repudiandae, iusto assumenda deserunt ducimus, nemo nostrum molestiae culpa nisi perspiciatis facilis, laudantium beatae. Tenetur harum debitis natus accusantium. Natus consequatur magnam dolore esse ipsa at, itaque error voluptatum molestias corporis aspernatur minima cupiditate rerum dicta voluptatibus quod eveniet aut explicabo! Sed.',
  },
  {
    category: 'Kozmetik',
    img: 'https://img-watsons.mncdn.com/Content/Images/Thumbs/0333809_keratin-bakim-sac-kremi-500-ml.png',
    product: 'Keratin Saç Bakım Kremi',
    newPrice: 90,
    oldPrice:null,
    feature: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, obcaecati iste excepturi, nam quaerat non amet sunt eligendi enim assumenda laudantium ad ratione porro voluptas optio nemo eius nesciunt distinctio dolor. Totam illum voluptates perferendis quam sed ex earum debitis ducimus, necessitatibus ipsum in. Eos accusamus, aperiam exercitationem ullam eveniet quidem possimus a quae perspiciatis! Sit dicta nesciunt repudiandae, iusto assumenda deserunt ducimus, nemo nostrum molestiae culpa nisi perspiciatis facilis, laudantium beatae. Tenetur harum debitis natus accusantium. Natus consequatur magnam dolore esse ipsa at, itaque error voluptatum molestias corporis aspernatur minima cupiditate rerum dicta voluptatibus quod eveniet aut explicabo! Sed.',
  },
  {
    category: 'Kozmetik',
    img: 'https://mcdn.flormar.com.tr/UPLOAD/collection/31000009-103_1_perfect-coverage-foundation.jpg',
    product: 'Fondoten',
    newPrice: 50,
    oldPrice:null,
    feature: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, obcaecati iste excepturi, nam quaerat non amet sunt eligendi enim assumenda laudantium ad ratione porro voluptas optio nemo eius nesciunt distinctio dolor. Totam illum voluptates perferendis quam sed ex earum debitis ducimus, necessitatibus ipsum in. Eos accusamus, aperiam exercitationem ullam eveniet quidem possimus a quae perspiciatis! Sit dicta nesciunt repudiandae, iusto assumenda deserunt ducimus, nemo nostrum molestiae culpa nisi perspiciatis facilis, laudantium beatae. Tenetur harum debitis natus accusantium. Natus consequatur magnam dolore esse ipsa at, itaque error voluptatum molestias corporis aspernatur minima cupiditate rerum dicta voluptatibus quod eveniet aut explicabo! Sed.',
  },
  ]
}
