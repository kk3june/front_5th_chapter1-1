(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(l){if(l.ep)return;l.ep=!0;const o=s(l);fetch(l.href,o)}})();function m(e){localStorage.setItem("user",JSON.stringify(e)),a("/profile")}function p(){localStorage.removeItem("user"),a("/login")}function r(){return JSON.parse(localStorage.getItem("user"))}function g(e){localStorage.setItem("user",JSON.stringify(e))}function v(){return`
		<main class="bg-gray-100 flex items-center justify-center min-h-screen">
			<div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
				<h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
				<form id="login-form">
					<div class="mb-4">
						<input type="text" id="username" name="username" placeholder="사용자 이름" class="w-full p-2 border rounded">
					</div>
					<div class="mb-6">
						<input type="password" name="password" placeholder="비밀번호" class="w-full p-2 border rounded">
					</div>
					<button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
				</form>
				<div class="mt-4 text-center">
					<a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
				</div>
				<hr class="my-6">
				<div class="text-center">
					<button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
				</div>
			</div>
		</main>`}function u(){return`
		<footer class="bg-gray-200 p-4 text-center">
			<p>&copy; 2024 항해플러스. All rights reserved.</p>
		</footer>`}function f(e){return`
		<header class="bg-blue-600 text-white p-4 sticky top-0">
			<h1 class="text-2xl font-bold">항해플러스</h1>
		</header>

		<nav class="bg-white shadow-md p-2 sticky top-14">
			<ul class="flex justify-around">
			${r()?`<li><a href="/" data-link class="${e==="/"?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
				<li><a href="/profile" data-link class="${e==="/profile"?"text-blue-600 font-bold":"text-gray-600"}">프로필</a></li>
				<li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>`:`<li><a href="/" data-link class="${e==="/"?"text-blue-600":"text-gray-600"}">홈</a></li>
				<li><a href="/login" class="text-gray-600">로그인</a></li>`}
			
			</ul>
		</nav>
		`}function x(){return`
		<div class="bg-gray-100 min-h-screen flex justify-center">
			<div class="max-w-md w-full">
				${f("/")}

				<main class="p-4">
					<div class="mb-4 bg-white rounded-lg shadow p-4">
						<textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
						<button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
					</div>

					<div class="space-y-4">

						<div class="bg-white rounded-lg shadow p-4">
							<div class="flex items-center mb-2">
								<img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
								<div>
									<p class="font-bold">홍길동</p>
									<p class="text-sm text-gray-500">5분 전</p>
								</div>
							</div>
							<p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
							<div class="mt-2 flex justify-between text-gray-500">
								<button>좋아요</button>
								<button>댓글</button>
								<button>공유</button>
							</div>
						</div>

						<div class="bg-white rounded-lg shadow p-4">
							<div class="flex items-center mb-2">
								<img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
								<div>
									<p class="font-bold">김철수</p>
									<p class="text-sm text-gray-500">15분 전</p>
								</div>
							</div>
							<p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
							<div class="mt-2 flex justify-between text-gray-500">
								<button>좋아요</button>
								<button>댓글</button>
								<button>공유</button>
							</div>
						</div>

						<div class="bg-white rounded-lg shadow p-4">
							<div class="flex items-center mb-2">
								<img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
								<div>
									<p class="font-bold">이영희</p>
									<p class="text-sm text-gray-500">30분 전</p>
								</div>
							</div>
							<p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
							<div class="mt-2 flex justify-between text-gray-500">
								<button>좋아요</button>
								<button>댓글</button>
								<button>공유</button>
							</div>
						</div>

						<div class="bg-white rounded-lg shadow p-4">
							<div class="flex items-center mb-2">
								<img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
								<div>
									<p class="font-bold">박민수</p>
									<p class="text-sm text-gray-500">1시간 전</p>
								</div>
							</div>
							<p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
							<div class="mt-2 flex justify-between text-gray-500">
								<button>좋아요</button>
								<button>댓글</button>
								<button>공유</button>
							</div>
						</div>

						<div class="bg-white rounded-lg shadow p-4">
							<div class="flex items-center mb-2">
								<img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
								<div>
									<p class="font-bold">정수연</p>
									<p class="text-sm text-gray-500">2시간 전</p>
								</div>
							</div>
							<p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
							<div class="mt-2 flex justify-between text-gray-500">
								<button>좋아요</button>
								<button>댓글</button>
								<button>공유</button>
							</div>
						</div>
					</div>
				</main>

				${u()}
			</div>
		</div>`}function h(){return`
		<main class="bg-gray-100 flex items-center justify-center min-h-screen">
			<div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
				<h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
				<p class="text-4xl font-bold text-gray-800 mb-4">404</p>
				<p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
				<p class="text-gray-600 mb-8">
					요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
				</p>
				<a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
					홈으로 돌아가기
				</a>
			</div>
		</main>`}function y(){const e=r();return`
		<div id="root">
			<div class="bg-gray-100 min-h-screen flex justify-center">
				<div class="max-w-md w-full">
					${f("/profile")}

					<main class="p-4">
						<div class="bg-white p-8 rounded-lg shadow-md">
							<h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
								내 프로필
							</h2>
							<form id="profile-form">
								<div class="mb-4">
									<label
										for="username"
										class="block text-gray-700 text-sm font-bold mb-2"
										>사용자 이름</label
									>
									<input
										type="text"
										id="username"
										name="username"
										value="${e.username}"
										class="w-full p-2 border rounded"
									/>
								</div>
								<div class="mb-4">
									<label
										for="email"
										class="block text-gray-700 text-sm font-bold mb-2"
										>이메일</label
									>
									<input
										type="email"
										id="email"
										name="email"
										value="${e.email}"
										class="w-full p-2 border rounded"
									/>
								</div>
								<div class="mb-6">
									<label
										for="bio"
										class="block text-gray-700 text-sm font-bold mb-2"
										>자기소개</label
									>
									<textarea
										id="bio"
										name="bio"
										rows="4"
										class="w-full p-2 border rounded"
									>
	${e.bio}</textarea
									>
								</div>
								<button
									type="submit"
									class="w-full bg-blue-600 text-white p-2 rounded font-bold"
								>
									프로필 업데이트
								</button>
							</form>
						</div>
					</main>

					${u()}
				</div>
			</div>
		</div>
		`}const i={"/":x,"/profile":y,"/login":v,"*":h};function c(){const e=window.location.pathname;let t;const s=r();s&&e==="/login"?t=i["/"]:!s&&e==="/profile"?t=i["/login"]:t=i[e]||i["*"];const n=document.querySelector("#root");n.innerHTML=t(),b()}function w(){const e=window.location.hash.slice(1)||"/";let t;const s=r();s&&e==="/login"?t=i["/"]:!s&&e==="/profile"?t=i["/login"]:t=i[e]||i["*"];const n=document.querySelector("#root");n.innerHTML=t(),b()}function L(e){e.target.matches("[data-link]")?e.preventDefault():e.target.href.includes("#")&&(e.preventDefault(),p()),a(e.target.href)}function a(e){window.history.pushState({},"",e),c()}function $(){window.addEventListener("popstate",c),window.addEventListener("hashchange",w),document.body.addEventListener("click",L),c()}function b(){const e=document.getElementById("login-form");e&&e.addEventListener("submit",s=>{s.preventDefault();const{username:n}=s.target.elements;m({username:n.value,email:"",bio:""}),a("/profile")});const t=document.getElementById("profile-form");t&&t.addEventListener("submit",s=>{s.preventDefault();const{username:n,email:l,bio:o}=s.target.elements;g({username:n.value,email:l.value,bio:o.value})})}function S(){$()}S();
