import {useForm} from 'react-hook-form'


interface formType {
    email: String,
    password: String

}

function SignIn() {
    const {register, handleSubmit} = useForm();

    const submitForm = (data: any) => {
        console.log(data.email)
        console.log(data.password)
    }


    return (
        <div className={"w-full h-[90vh] flex justify-center items-center"}>
            <div className={"bg-gray-100 w-[30rem] h-auto p-5 rounded-3xl flex justify-center"}>
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className={"my-2"}>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            className='bg-gray-300 rounded p-2 ml-5'
                            {...register('email')}
                            required
                        />
                    </div>
                    <div className={"my-2"}>
                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            className='bg-gray-300 rounded p-2 ml-5'
                            {...register('password')}
                            required
                        />
                    </div>
                    <button type='submit' className='bg-gray-500 p-2 rounded mx-auto text-white text-2xl'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;