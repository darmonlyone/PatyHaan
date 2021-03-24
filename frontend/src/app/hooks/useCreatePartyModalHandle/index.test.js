import {renderHook, act} from '@testing-library/react-hooks'
import useCreatePartyModalHandle from '.'

describe('test useCreatePartyModalHandle', () => {

    it('should useCreatePartyModalHandle hadle close and open modal correctly', () => {
        const {result} = renderHook(() => useCreatePartyModalHandle())

        expect(result.current.createPartyModalOpen).toEqual(false)

        act(() => result.current.onOpenCretePartyModal())

        expect(result.current.createPartyModalOpen).toEqual(true)

        act(() => result.current.onCloseCreatepartyModal())

        expect(result.current.createPartyModalOpen).toEqual(false)
    })
    
})

