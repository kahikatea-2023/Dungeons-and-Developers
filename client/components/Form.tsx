import { useMutation, useQueryClient } from '@tanstack/react-query'

function Form() {
  const queryClient = useQueryClient()
  const mutations = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(['getOutcomes'])
    },
  })

  return <p>I'm the Form</p>
}

export default Form
