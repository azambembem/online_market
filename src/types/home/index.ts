// export type TGenre = {
// 	_id: string;
// 	fullName: string;
// 	audioBookCount: number;
// 	bookCount: number;
// 	childCount: number;
// 	ebookCount: number;
// 	imgUrl: null | string;
// 	name: string;
// 	parentId: null | string;
// 	_v: 0;
// };

export type TCategory = {
	_id: string;
	name: string;
	created_at: number;
	updated_at: number;
	__v: 0,
	update_at: number;
}

export type TTodays = {
	_id: string;
	name: string;
	category: {
	  _id: string;
	  name: string;
	};
	star: number;
	price: number;
	discount: number;
	total_count: number;
	total_sold: number;
	main_image: string;
	images: string[];
	created_at: string;
	updated_at?: string;
	update_at?: string;
	__v: number;
	hashtags?: string[];
  };
  
  export type TMonth = {
	_id: string;
	name: string;
	category: {
	  _id: string;
	  name: string;
	};
	star: number;
	price: number;
	discount: number;
	total_count: number;
	total_sold: number;
	main_image: string;
	images: string[];
	created_at: string;
	updated_at?: string;
	update_at?: string;
	__v: number;
	hashtags?: string[];
  };

  export type TExplore = {
	_id: string;
	name: string;
	category: {
	  _id: string;
	  name: string;
	};
	star: number;
	price: number;
	discount: number;
	total_count: number;
	total_sold: number;
	main_image: string;
	images: string[];
	created_at: string;
	updated_at?: string;
	update_at?: string;
	__v: number;
	hashtags?: string[];
  };



// export type TBooks = {
// 	_id: string;
// 	name: string;
// 	genre: string;  // 'genre'는 보통 id 값을 담고 있기 때문에 string 타입으로 정의
// 	author: string;  // 'author'도 마찬가지로 author의 id를 담고 있으므로 string 타입
// 	amount: number;
// 	bookPrice: number;
// 	language: string;
// 	cover: "hard" | "soft";  // "hard"와 "soft" 두 가지 값이 있을 것으로 예상
// 	discount: number;
// 	numberOfPage: number;
// 	state: "new" | "used";  // 책 상태는 "new"와 "used"가 있을 것이라고 가정
// 	year: number;
// 	barcode: string;
// 	description: string;
// 	imgUrl: string;  // 이미지 URL은 문자열로 정의
// 	additionalImages: string[];  // 추가 이미지는 URL 배열로 정의
//   };
  