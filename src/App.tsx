import { useState, useEffect } from 'react';
import { Image as ImageIcon } from 'lucide-react';

const products = [
  { title: '아이스크림 냉동 쇼케이스', tags: '#아이스크림 #가로사이즈 #온도한계', image: 'https://picsum.photos/seed/icecream_showcase/800/600' },
  { title: '오픈평대 냉동 쇼케이스', tags: '#아이스크림 #가로사이즈 #온도한계', image: 'https://picsum.photos/seed/open_showcase/800/600' },
  { title: '평대(진열)', tags: '#아이스크림 #가로사이즈 #온도한계', image: 'https://picsum.photos/seed/display_freezer/800/600' },
  { title: '리치인 냉동 (수직형)', tags: '#아이스크림 #가로사이즈 #온도한계', image: 'https://picsum.photos/seed/reachin_freezer/800/600' },
  { title: '수직 쇼케이스(Reach-In)', tags: '#아이스크림 #가로사이즈 #온도한계', image: 'https://picsum.photos/seed/vertical_showcase/800/600' },
  { title: '오픈 케이스', tags: '#아이스크림 #가로사이즈 #온도한계', image: 'https://picsum.photos/seed/open_case/800/600' }
];

export default function App() {
  const [heroImage, setHeroImage] = useState(products[0].image);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * products.length);
    setHeroImage(products[randomIndex].image);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/30 backdrop-blur-md border-b border-gray-200/30' : 'bg-white border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold tracking-tight">명성냉동렌탈</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">회사소개</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">장비안내</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">납품사례</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">견적문의</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=1920&auto=format&fit=crop" 
            alt="Commercial Freezers Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>
        </div>
        {/* Gradient transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-white/0 z-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-blue-400 font-bold tracking-wide">렌탈은 빠르게, 운영은 안정적으로.</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                  명성냉동렌탈
                </h1>
                <p className="text-xl text-gray-200 font-medium leading-relaxed">
                  신속, 정확, AS 유지로<br/>현장 리스크를 최소화합니다.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3.5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/50">
                  견적문의
                </button>
                <button className="px-8 py-3.5 bg-white/10 text-white backdrop-blur-md rounded-full font-bold hover:bg-white/20 transition-colors shadow-md border border-white/20">
                  장비 상세보기
                </button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl aspect-[4/3] flex items-center justify-center shadow-xl shadow-black/40 overflow-hidden">
              <img 
                src={heroImage} 
                alt="Random Equipment" 
                className="w-full h-full object-cover transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Operation Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">저희는 이렇게 운영합니다!</h2>
          <p className="text-gray-500 mb-16">누가, 어디서, 어떻게, 무엇을 운영하는지</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-gray-100 rounded-xl aspect-[1/2] flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-gray-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">철저히 한번에 원스톱 관리 체제</h2>
          <p className="text-gray-500 mb-16">점검 완료 장비 출고, 현장의 정확한 설치, AS 유지보수까지 원스톱으로 책임지는 전문 업체</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { sub: '정확', title: '정확한 배송', desc: '문의 후 최소 10분~1시간 내 담당자가 연락드리며, 현장 상황에 맞춰 빠르게 설치합니다.', image: 'https://drive.google.com/thumbnail?id=1pmYJbyn0zdmdHoVLOBkSOLyByBVEXEsB&sz=w1000', bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop' },
              { sub: '신뢰', title: '일정 준수', desc: '약속한 설치 날짜와 회수 일정을 정확히 지키며, 고객의 운영 계획을 방해하지 않습니다.', image: 'https://drive.google.com/thumbnail?id=1iGsj6y1rV_TldUxwO6uvRTEWN6u7K9uo&sz=w1000', bgImage: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop' },
              { sub: '유지', title: 'AS 관리 체제', desc: '고장 시 즉시 대응하고 장비 후 제대로하여 운영 리스크를 최소화합니다.', image: 'https://drive.google.com/thumbnail?id=1VBfBKNwRb-YNSUvqifzz0eTq-yo4DQ8Z&sz=w1000', bgImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 rounded-2xl p-8 text-left flex flex-col h-full relative overflow-hidden group">
                <div className="absolute inset-0 z-0">
                  <img src={item.bgImage} alt="" className="w-full h-full object-cover opacity-100 blur-[4px] group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500"></div>
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="bg-white rounded-xl aspect-video flex items-center justify-center mb-8 overflow-hidden relative p-6 shadow-sm">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    ) : (
                      <ImageIcon className="w-12 h-12 text-gray-400" />
                    )}
                  </div>
                  <p className="text-sm font-semibold text-gray-400 mb-2">{item.sub}</p>
                  <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">냉장,냉동은 한번에! 여기서!</h2>
          <p className="text-gray-500 mb-16">하나도 빠짐없이 모든것이 여기에!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-left shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="bg-gray-200 rounded-xl aspect-[4/3] flex items-center justify-center mb-6 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                <p className="text-xs text-gray-500 mb-6">{product.tags}</p>
                <button className="w-full py-3 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors">
                  장비 상세보기
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16">협력 업체</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-200 rounded-lg aspect-[2/1] flex items-center justify-center">
                {/* Logo placeholder */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">렌탈 진행 과정</h2>
          <p className="text-gray-500 mb-16">문의부터 회수까지 4단계로 진행됩니다!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '문의', title: '견적요청 폼 작성', desc: '장비 종류, 사이즈, 수량, 대여기간 알려주세요' },
              { step: '견적', title: '담당자 배정 후 연락', desc: '현장 조건 확인 후 정확한 견적 제시합니다' },
              { step: '설치', title: '일정 맞춰 현장설치', desc: '전국 어디든 신속하게 설치하고 운영을 시작합니다' },
              { step: '회수', title: '렌탈 종료 후 회수 및 AS', desc: '장비 후 제대로, 상태 관리 철저하게 진행합니다.' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-100 rounded-2xl p-8 text-left flex flex-col h-full">
                <div className="bg-gray-200 rounded-xl aspect-square flex items-center justify-center mb-8">
                  <ImageIcon className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-xs font-semibold text-gray-500 mb-2">{item.step}</p>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-[#e8e8e8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">견적 문의</h2>
            <p className="text-gray-600">모바일에서도, 테블릿에서도 언제 어디서나 요청!</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">업체명(또는 행사명)</label>
                <input type="text" placeholder="ex) ABCDEF기업" className="w-full px-4 py-3 bg-gray-300/50 border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors placeholder-gray-500" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">담당자 성함</label>
                <input type="text" placeholder="ex) 홍길동" className="w-full px-4 py-3 bg-gray-300/50 border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors placeholder-gray-500" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">연락처</label>
                <input type="text" placeholder="ex) 010-1234-1234" className="w-full px-4 py-3 bg-gray-300/50 border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors placeholder-gray-500" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">설치지역</label>
                <input type="text" placeholder="ex) 주소, 층, 호실 입력" className="w-full px-4 py-3 bg-gray-300/50 border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors placeholder-gray-500" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">렌탈 희망 제품</label>
                <input type="text" placeholder="ex)제품명, 사이즈, 전압" className="w-full px-4 py-3 bg-gray-300/50 border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors placeholder-gray-500" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">렌탈기간</label>
                <input type="text" placeholder="ex)2026.01.01~2026.02.28" className="w-full px-4 py-3 bg-gray-300/50 border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors placeholder-gray-500" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">설치희망날짜</label>
                <input type="text" placeholder="ex)2026.01.01" className="w-full px-4 py-3 bg-gray-300/50 border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors placeholder-gray-500" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">추가요청사항</label>
                <textarea rows={4} placeholder="ex)궁금하신 사항 및 추가하실 사항 작성해주세요." className="w-full px-4 py-3 bg-gray-300/50 border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors placeholder-gray-500 resize-none"></textarea>
              </div>
            </div>
            <div className="pt-4 flex justify-center">
              <button type="button" className="px-12 py-4 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors w-full md:w-auto">
                견적 문의하기
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="text-2xl font-bold mb-6 md:mb-0">명성냉동렌탈</div>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-gray-900">Home</a>
              <a href="#" className="hover:text-gray-900">회사소개</a>
              <a href="#" className="hover:text-gray-900">장비안내</a>
              <a href="#" className="hover:text-gray-900">납품사례</a>
              <a href="#" className="hover:text-gray-900">견적문의</a>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between text-xs text-gray-500 leading-relaxed">
            <div className="mb-4 md:mb-0">
              @2016 All Rights Reserved.
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12">
              <div>
                <p>업체명 : 명성냉동 | 대표 : 조성근</p>
                <p>사업자등록번호 : </p>
                <p>주소 : 경기도 고양시 일산서구 송파로 151번길 48-6(가좌동)</p>
              </div>
              <div>
                <p>TEL : 031-923-2382</p>
                <p>H.P : 010-3779-2237</p>
                <p>FAX : </p>
                <p>E-mail : </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
