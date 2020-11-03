VERSION 5.00
Begin VB.Form Adriel 
   BackColor       =   &H00C0C0FF&
   Caption         =   "Adriel - VIII Schubert"
   ClientHeight    =   6915
   ClientLeft      =   120
   ClientTop       =   465
   ClientWidth     =   17760
   LinkTopic       =   "Adriel"
   ScaleHeight     =   6915
   ScaleWidth      =   17760
   StartUpPosition =   3  'Windows Default
   Begin VB.CommandButton Command4 
      BackColor       =   &H0080FF80&
      Caption         =   "RESET"
      Height          =   975
      Left            =   9600
      Style           =   1  'Graphical
      TabIndex        =   5
      Top             =   5640
      Width           =   7815
   End
   Begin VB.ComboBox Combo1 
      Height          =   315
      ItemData        =   "Adriel.frx":0000
      Left            =   8280
      List            =   "Adriel.frx":0037
      TabIndex        =   3
      Text            =   "15"
      Top             =   5640
      Width           =   1095
   End
   Begin VB.Timer Timer1 
      Interval        =   15
      Left            =   17280
      Top             =   0
   End
   Begin VB.CommandButton Command1 
      BackColor       =   &H008080FF&
      Caption         =   "END"
      Height          =   975
      Left            =   120
      Style           =   1  'Graphical
      TabIndex        =   1
      Top             =   5640
      Width           =   7935
   End
   Begin VB.Frame frame1 
      BackColor       =   &H00C0C0FF&
      Caption         =   "Text Mover"
      BeginProperty Font 
         Name            =   "MS UI Gothic"
         Size            =   36
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H0080FFFF&
      Height          =   5295
      Left            =   120
      TabIndex        =   0
      Top             =   240
      Width           =   17295
      Begin VB.Label Label1 
         AutoSize        =   -1  'True
         BackColor       =   &H00C0C0FF&
         Caption         =   "ADRIEL JANSEN S."
         BeginProperty Font 
            Name            =   "MS UI Gothic"
            Size            =   36
            Charset         =   0
            Weight          =   700
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00FF8080&
         Height          =   720
         Left            =   17160
         TabIndex        =   2
         Top             =   1680
         Width           =   6225
      End
   End
   Begin VB.Label Label3 
      BackColor       =   &H00C0C0FF&
      Caption         =   "Minus = L-R"
      BeginProperty Font 
         Name            =   "MS UI Gothic"
         Size            =   8.25
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H0080FFFF&
      Height          =   255
      Left            =   8280
      TabIndex        =   6
      Top             =   6360
      Width           =   1095
   End
   Begin VB.Label Label2 
      AutoSize        =   -1  'True
      BackColor       =   &H00C0C0FF&
      Caption         =   "SPEED"
      BeginProperty Font 
         Name            =   "MS UI Gothic"
         Size            =   17.25
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H0000FFFF&
      Height          =   345
      Left            =   8280
      TabIndex        =   4
      Top             =   6000
      Width           =   1110
   End
End
Attribute VB_Name = "Adriel"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private Sub Command1_Click()
End
End Sub

Private Sub Command4_Click()
Label1.Left = 17160
Combo1.Text = "15"
End Sub
Private Sub Timer1_Timer()
Dim yey As Integer
yey = 0
If Combo1.Text = "" Or Combo1.Text = "-" Then yey = "15" Else yey = Combo1.Text
Label1.Left = Label1.Left - yey
If (Label1.Left <= -(Label1.Width)) Or (Label1.Top >= Me.ScaleWidth) Then Label1.Left = Me.ScaleWidth
End Sub
