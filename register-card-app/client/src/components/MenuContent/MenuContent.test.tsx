import React from 'react'
import { render } from '@testing-library/react'
import MenuContent from './MenuContent'

describe('Menu should', () => {
    it('render text', () => {
        const { getByText } = render(<MenuContent />)

        expect(getByText('This is menu content')).toBeTruthy()
    })
})
