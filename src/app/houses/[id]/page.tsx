type Params = Promise<{ id: string }>;

export default async function HouseDetailsPage({
    params,
}: {
    params: Params;
}) {
    const { id } = await params;

    return <h1>House Details: {id}</h1>;
}