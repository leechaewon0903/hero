
import pandas as pd

# CSV 파일 경로
csv_file_path = './busstation.csv'

# CSV 파일 읽기
df = pd.read_csv(csv_file_path, encoding='utf-8')

# JSON으로 변환할 때 바로 컬럼명을 변경
df_renamed = df[['정류소명', 'X좌표', 'Y좌표']].rename(columns={
    '정류소명': '정류소명', 
    'X좌표': '경도', 
    'Y좌표': '위도'
})

# JSON으로 변환
json_result = df_renamed.to_json(orient='records', force_ascii=False)

# JSON 파일 경로
json_file_path = 'locations.json'

# JSON 파일로 저장
with open(json_file_path, 'w', encoding='utf-8') as f:
    f.write(json_result)

print("JSON 파일이 생성되었습니다:", json_file_path)