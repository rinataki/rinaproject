export async function getServerSideProps(context: any) {
    return {
        props: {
            test: "test"
        }
    }
}

export default function ProjectPage(prop: {test: string}
    ){
        return (
            <>
                <p>{prop.test}</p>
            </>
        )
    }