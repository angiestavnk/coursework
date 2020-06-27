import UVIndex from "./IUVindex";

export default class UVIndexService {
    public async getUVIndex(): Promise<UVIndex> {
        const url = 'https://api.openuv.io/api/v1/uv?lat=47.01&lng=28.88'
        const response = await fetch(url, {
            headers: {
                'x-access-token': 'be92d6b3ae98c152b79516bf170f1ea6'
              }
        });
        const uvIndex = await response.json();
        const currentUv = uvIndex.result.uv;
        const maxUv = uvIndex.result.uv_max;
        console.log(uvIndex)
        const UVIndexElement: UVIndex = {
            currentUvIndex: currentUv.toFixed(2),
            maxUvIndex: maxUv.toFixed(2)
        }
        // const UVIndexElement: UVIndex = {
        //     currentUvIndex: '22',
        //     maxUvIndex: '3'
        // }
        return UVIndexElement;
    }
}