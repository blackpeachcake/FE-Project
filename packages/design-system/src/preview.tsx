import {StrictMode} from 'react'

import {createRoot} from 'react-dom/client'

import Text from './components/Text'

import './tokens/index.css'

const longLine =
    '이 줄은 컨테이너 너비를 넘길 만큼 길게 작성한 예시 문장으로, 자동 줄바꿈이 정상적으로 동작하는지 확인하기 위한 테스트용 텍스트입니다.'
const intentionalBreak = '첫 번째 줄입니다.\n두 번째 줄입니다.'

function Preview() {
    return (
        <div style={{maxWidth: 320, padding: 24, display: 'grid', gap: 16}}>
            <Text variant="heading">multiline 확인</Text>

            <div>
                <Text variant="caption" color="secondary">
                    의도적인 \n 포함 (multiline)
                </Text>
                <Text variant="body" multiline>
                    {intentionalBreak}
                </Text>
            </div>

            <div>
                <Text variant="caption" color="secondary">
                    넘칠 때 자동 줄바꿈 (기존 wrap 유지 확인)
                </Text>
                <Text variant="body">{longLine}</Text>
            </div>
        </div>
    )
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Preview />
    </StrictMode>,
)
