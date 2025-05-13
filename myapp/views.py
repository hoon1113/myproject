from django.shortcuts import render

# Create your views here.
def login(request):
    return render(request, 'myapp/login.html')
def home(request):
    return render(request, 'myapp/home.html')

def busmap(request):
    return render(request, 'myapp/busmap.html')

def map(request):
    return render(request, 'myapp/map.html')

def map_view(request):
    college_data = {
        "경상대학": ["경영학과", "회계학과", "경제통상학과", "무역학과", "관광경영학과", "호텔외식경영학과"],
        "인문사회대학": ["법학과", "경찰행정학과", "신문방송학과", "사회복지학과", "지적학과", "광고홍보학과", "영어영문학과", "문헌정보학과"],
        "공과대학": ["데이터사이언스학과", "인공지능소프트웨어학과", "디지털보안학과", "건축학과(5년)", "건축공학과"],
        "사범대학": ["수학교육과", "국어교육과", "교직과"],
        "예술대학": ["산업디자인학과", "시각디자인학과", "공예디자인학과", "아트앤패션디자인학과", "디지털미디어디자인학과"],
        "보건의료과학대학": ["간호학과", "치위생학과", "방사선학과", "물리치료학과"],
        "직할학부": ["항공운항학과", "항공기계공학과", "무인항공기학과", "항공서비스학과", "군사학과"]
    }
    return render(request, 'myapp/map.html', {'college_data': college_data})