import {atom} from 'recoil';

export const nicknameState = atom({ //함수 이름으로 임포트
	key: "nicknameState",
	default: "" // 초기값!
})